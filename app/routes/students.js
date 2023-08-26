import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Students = () => html`
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
        termsofuse {
            margin-left: 20px;
        }
        
    </style>
    <${Page}
        title="Students"
        subtitle="Blog Social Époque"
        description="Meet the students who collaborate with us"
        sidebarImage=${prefixUriIfNeeded('/assets/network.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <div class="info">
            <footer>
            <a
            href="${prefixUriIfNeeded('/network')}"
            class="termsofuse"
            onClick=${avoidReload}
        >
        Team Social Époque
        </a>
                </footer>
                <footer>
            <a
            href="${prefixUriIfNeeded('/professors')}"
            class="termsofuse"
            onClick=${avoidReload}
        >
            Professors
        </a>             
                    </footer>
                    <footer>
                    <a
                    href="${prefixUriIfNeeded('/students')}"
                    class="termsofuse"
                    onClick=${avoidReload}
                >
                    Students
                </a>             
                            </footer>
                <h1 class="info-title">Students</h1>
                <p>
                Still no network.
                </p>
            </div>
        </div>

    <//>
`
