import { html } from '../lib/htm-preact.js';
import { Page } from '../components/layout/page.js';
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js';
import { avoidReload } from '../utils/avoidReload.js';


export const Calculay = () => html`
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

        .calculator-container {
            margin-top: 40px;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        title="Calculay"
        subtitle="The LGBTQ+ friendly calculator"
        description="Stop dividing: ADD!"
        sidebarImage=${prefixUriIfNeeded('/assets/carthree.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <img
                src=${prefixUriIfNeeded('/assets/icon.png')}
                class="image"
            />
            <div class="info">
                <h1 class="info-title">Calculay</h1>
                <p>
                    The calculator's goal is not only to calculate, but also to inform/denounce homofobia towards LGBTQIA+ people.
                </p>
                <p>
                    Learn more on how to use your calculator above and how to make the denounce. The app is also able to make scientific calculations.
                </p>
            </div>
        </div>

        <footer>
            <a
                href="${prefixUriIfNeeded('/howtouse')}"
                class="howtouse"
                onClick=${avoidReload}
            >
                How to use Calculay
            </a>
        </footer>

        <footer>
            <a
                href="${prefixUriIfNeeded('/termsofuse')}"
                class="termsofuse"
                onClick=${avoidReload}
            >
                Terms of use Calculay
            </a>
        </footer>

        <footer>
            <a
                href="${prefixUriIfNeeded('/maincalculay')}"
                class="maincalculay"
                onClick=${avoidReload}
            >
                Start Calculay
            </a>
        </footer>

    <//>
`;
