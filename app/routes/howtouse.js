import { html } from '../lib/htm-preact.js'
import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { avoidReload } from '../utils/avoidReload.js'

export const Howtouse = () => html`
    <style>
        .about-content {
            display: block;
        }

        .about-content img.image {
            border-radius: 50%;
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
        title="How to use"
        subtitle="Calculay"
        sidebarImage=${prefixUriIfNeeded('/assets/calculay.jpg')}
        showLinks=${true}
    >
        <div class="about-content">
            <div class="info">
                <h1 class="info-title">How to use</h1>
                <p>
                The calculator's goal is not only to calculate, but also to inform injustice cases against LGBTQIA+ people.
                </p>
            <p>
                Press the equal button and confrim your denounce after all
            </p>
            <p>
            If you want to check the denounces, you can access the map by clicking on the menu on your top left and then on 'Mapping'.
        </p>
        <p>
        In case you are interested in scientific calculation, press the calculator symbol on the bottom of the calculator screen. Do not forget to click on the clock button to check your previous calculs.
    </p>
            </div>
        </div>

        <footer>
            <a
                href="${prefixUriIfNeeded('/calculay')}"
                class="calculay"
                onClick=${avoidReload}
            >
                About Calculay
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
    href="https://play.google.com/store/apps/details?id=com.socialepoque.calculay&pli=1"
    class=""
>
    Download Calculay
</a>
    
        </footer>

    <//>
`
