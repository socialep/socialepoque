import { html, useState, useMemo, useCallback } from '../lib/htm-preact.js'

import { BaseInput } from '../components/form/baseInput.js'
import { Page } from '../components/layout/page.js'
import { inputStyles } from '../styles/input.js'
import { Mail } from '../lib/mail.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'
import debounce from '../utils/debounce.js'
import { Spinner } from '../styles/Spinner.js'

const validateEmailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
const requiredTexts = ['name', 'message']

export const Contact = ({ state, dispatch }) => {
    const [isSent, setIsSent] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [sentError, setSentError] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const setText = {
        name: setName,
        company: setCompany,
        phone: setPhone,
        message: setMessage,
    }
    const texts = { name, company, phone, message }

    const [errorProperty, setErrorProperty] = useState('')
    const [formError, setFormError] = useState('')

    const validateText = useCallback(
        (property, value, isRequired) => {
            if (isRequired && value.length < 4) {
                setFormError('4 characters minimum.')
                setErrorProperty(property)
                return false
            } else if (errorProperty === property) {
                setFormError('')
                setErrorProperty('')
            }
            return true
        },
        [errorProperty]
    )

    const updateText = useCallback(
        (event) => {
            event.preventDefault()
            event.stopPropagation()
            const property = event.target.dataset.property
            const text = event.target.value
            setText[property](text)
            const required = Boolean(event.target.required)
            validateText(property, text, required)
        },
        [validateText]
    )

    const debouncedUpdateText = useMemo(
        () => debounce(updateText, 500),
        [updateText]
    )

    const validateEmail = useCallback(
        (email) => {
            if (email.length < 4) {
                setFormError('4 characters minimum.')
                setErrorProperty('email')
                return false
            } else if (!validateEmailRegex.test(email)) {
                setFormError('Enter valid email')
                setErrorProperty('email')
                return false
            } else if (errorProperty === 'email') {
                setFormError('')
                setErrorProperty('')
            }
            return true
        },
        [errorProperty]
    )

    const updateEmail = useCallback(
        (event) => {
            event.preventDefault()
            event.stopPropagation()
            const email = event.target.value
            setEmail(email)
            validateEmail(email)
        },
        [validateEmail]
    )

    const debouncedUpdateEmail = useMemo(
        () => debounce(updateEmail, 500),
        [updateEmail]
    )

    const sendMessage = async (event) => {
        event.preventDefault()
        event.stopPropagation()
        const emailIsValid = validateEmail(email)
        if (!emailIsValid) {
            return
        }
        const textsProperties = Object.keys(texts)

        for (let idx = 0; idx < textsProperties.length; idx++) {
            const property = textsProperties[idx]
            const isRequired = requiredTexts.includes(property)
            const textIsValid = validateText(
                property,
                texts[property],
                isRequired
            )
            if (!textIsValid) {
                return
            }
        }
        if (isSending) {
            return false
        }
        setIsSending(true)
        setTimeout(() => {
            setIsSending(false)
            setSentError('timeout error, no response from server')
        }, 10000)
        const [sendError, sent] = await Mail.send({
            name,
            email,
            company,
            phone,
            message,
        })
        setIsSending(false)
        if (sendError) {
            setSentError(sendError)
        } else {
            setIsSent(true)
        }
    }

    return html`     <style>
    .about-content {
        display: block;
    }

    .about-content img.image {
        width: 150px;
        border: 0;
        max-width: 100%;
        vertical-align: middle;
        float: left;
        margin-right: 2rem;
    }

    .info-title {
        margin: 30px 0 20px;
        font-size: 3.8rem;
        font-weight: 700;
        line-height: 1.1;
        font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    }

    .info p {
        font-size: 2rem;
        margin: 0 0 30px;
    }

    footer {
        padding: 10px 0;
        font-size: 1.4rem;
        letter-spacing: 1px;
        font-weight: 700;
        font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        text-transform: uppercase;
    }

    footer a.contact {
        text-decoration: none;
        background-color: transparent;
        color: #999;
        border-bottom: none;
        font-size: 1.4rem;
    }

    footer a.contact:hover {
        text-decoration: none;
        background-color: transparent;
        color: #333;
        outline: 0;
        transition: all 0.4s;
        border-bottom: none;
    }
</style>
        <${Page}
            title="Contact"
            subtitle="Get in touch with us"
            description=""
            sidebarImage=${prefixUriIfNeeded('/assets/default-contact.jpg')}
        >
            <div class="info">
            
<h1 class="info-title">Send us an email</h1>
<p>
Do you have any doubt about this initiative or would like to get in touch for future collaboration?
Send us an email to socialepoquebr@gmail.com. </p>   
            </div>

        <//>`
}


const SubmitButton = ({
    isSending,
    isSent,
    formError,
    sentError,
    sendMessage,
}) => {
    const isDisabled = isSending || isSent || formError || sentError
    let message = '  Send message'
    let colorClass = ''
    if (formError) {
        message = 'Invalid form'
    } else if (isSending) {
        message = 'Sending...'
    } else if (sentError) {
        message = 'Failed to send message'
        colorClass = 'red'
    } else if (isSent) {
        message = 'Message sent!'
        colorClass = 'green'
    }
    return html`<button
            class="base button ${colorClass}"
            type="submit"
            onClick=${sendMessage}
            disabled=${isDisabled}
        >
            ${isSending &&
            html`<${Spinner}
                stroke="#eee"
                height=${18}
                width=${18}
            />`}${message}</button
        >${sentError && html` <span class="error"> ${sentError} </span> `}`
}