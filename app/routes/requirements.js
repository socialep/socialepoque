import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Requirements = () => html`
    <style>
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
        title="Requirements"
        subtitle="Blog Social Époque"
        description="Have your mini article published"
        sidebarImage=${prefixUriIfNeeded('/assets/womenhowtouse.jpg')}
        showLinks=${true}
    >
        <div class="about-content">

            <div class="info">
                <h1 class="info-title">Publish your article</h1>
                <p>
                The blog Social Époque is an initiative that accept mini articles about all topics related to the Education and sexual minorities. The aim is to provide one more extra source of information towards the LGBTQ+ community and to support the AMPLA publication of papers related to the field.
                </p>
                <p>
                The article must be written in English and contain between 800 to 1000 words. 
                </p>
                <p>
                The requests should be sent to socialepoquebr@gmail.com for analysis. Please, also attach a good quality photo and send a profile link or yours. The link can be from LinkedIn, ORCID or from the university you work for.
                </p>
                <p>
                If you are a professor, pease also state on the email if you are open for supervising new PhD students, once our blog also aims to support networking in the LGBTQ+ academic field.
                </p>
                <p>
                You should receive a feedback about your request after two weeks, as well as a positive or negative response regarding the publication.
                </p>
            </div>
        </div>

    <//>
`
