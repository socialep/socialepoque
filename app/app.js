import {
    html,
    render,
    useReducer,
    useMemo,
    useEffect,
} from './lib/htm-preact.js'
import debounce from './utils/debounce.js'
import { reducer, initialState } from './state.js'

import { Article } from './routes/article.js'
import { Category } from './routes/category.js'
import { Calculay } from './routes/calculay.js'
import { About } from './routes/about.js'
import { Contact } from './routes/contact.js'
import { Home } from './routes/home.js'
import { Howtouse } from './routes/howtouse.js'
import { Termsofuse } from './routes/termsofuse.js'
import { Requirements } from './routes/requirements.js'
import { Network } from './routes/network.js'
import { Professors } from './routes/professors.js'
import { Students } from './routes/students.js'
import { Maincalculay } from './routes/maincalculay.js'


import { getActiveItemId, getPageName } from './utils/path.js'

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const pageName = state?.pageName
    const CurrentPage = useMemo(() => {
        let Page = Home
        if (pageName === 'about') {
            Page = About
        } else if (pageName === 'contact') {
            Page = Contact
        } else if (pageName === 'categories') {
            Page = Category
        } else if (pageName === 'articles') {
            Page = Article
        } else if (pageName === 'calculay') {
            Page = Calculay
        } else if (pageName === 'howtouse') {
            Page = Howtouse
        } else if (pageName === 'termsofuse') {
            Page = Termsofuse
        } else if (pageName === 'maincalculay') {
            Page = Maincalculay
        } else if (pageName === 'requirements') {
            Page = Requirements
        } else if (pageName === 'network') {
            Page = Network
        } else if (pageName === 'students') {
            Page = Students
        } else if (pageName === 'professors') {
            Page = Professors
        }
        return Page
    }, [pageName])

    useEffect(() => {
        const showState = () => {
            debouncedConsole(state)
        }
        window.addEventListener('showState', showState)
        return function cleanup() {
            window.removeEventListener('showState', showState)
        }
    }, [state])

    useEffect(() => {
        const updatePath = () => {
            dispatch({
                type: 'URI_CHANGE',
                pageName: getPageName(),
                activeItemId: getActiveItemId(),
            })
        }
        window.addEventListener('popstate', updatePath)
        return function cleanup() {
            window.removeEventListener('popstate', updatePath)
        }
    }, [dispatch])

    return html`<${CurrentPage} state=${state} dispatch=${dispatch} />`
}

render(html`<${App} />`, document.getElementById('app-mount'))

Object.defineProperty(window, 'state', {
    async get() {
        dispatchEvent(new CustomEvent('showState'))
    },
    configurable: true,
    enumerable: true,
})
const debouncedConsole = debounce(console.log, 1000)
