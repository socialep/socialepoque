import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const About = () => html`
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
        title="About"
        subtitle="Blog Social Époque"
        description="Get to know a bit more about this initative"
        sidebarImage=${prefixUriIfNeeded('/assets/default-about.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <img
                src=${prefixUriIfNeeded('/assets/favicon.ico')}
                class="image"
            />
            <div class="info">
                <h1 class="info-title">Social Époque</h1>
                <p>
                Social Époque is an initiative that aims to promote social impact throught technological and educational resources. In this process, both professors and students that are interested in researching about education and/or sexual minorities causes are going to be able to publish small articles so they can connect with our network and debate about trends in their interested topic.
                </p>
                <p>
                The social era then flourishes through initiatives like this, in which more people will be motivated to act in favor of different causes.
                </p>
            </div>
        </div>

    <//>
`
