import { html, useEffect, useState } from '../../lib/htm-preact.js'
import { avoidReload } from '../../utils/avoidReload.js'
import prefixUriIfNeeded from '../../utils/prefixUriIfNeeded.js'

export const Menu = ({ categories, articles, menuVisible }) => {
    const [activeCategory, setActiveCategory] = useState(false)
    const toggleCategory = (event) => {
        const category = event.target.dataset.category
        setActiveCategory(category !== activeCategory ? category : false)
    }
    useEffect(() => {
        setActiveCategory(Object.values(categories)?.[0]?.id)
    }, [categories])
    return html` <style>
            .menu {
                background-color: #333;
                overflow: hidden;
                z-index: 10;
                display: block;
                top: 0;
                left: 0;
                height: 100%;
                box-shadow: #000 2px 2px 10px;
                padding-top: 5rem;
                transition: opacity linear 750ms, width linear 750ms;
                width: 0;
                opacity: 0;
                padding-right: 0;
                position: fixed;
            }
            .menu-open {
                opacity: 1;
                width: 100%;
            }
            @media (min-width: 768px) {
                .menu-open {
                    width: 40%;
                }
            }
            @media (min-width: 992px) {
                .menu-open {
                    width: 30%;
                }
            }
            @media (min-width: 1200px) {
                .menu-open {
                    width: 25%;
                }
            }

            .icon {
                padding: 0 20px;
                color: #dadada;
                font-size: 1.6rem;
            }
            .menu ul.menu-list {
                font-size: 1.6rem;
                list-style-type: none;
                padding-left: 20px;
            }
            .item {
                margin: 0;
                list-style: none;
                padding: 10px 0;
                padding-left: 10px;
                font-size: 1.6rem;
            }
            .item-link {
                color: #dadada;
                font-weight: 500;
                font-size: large;
                border-bottom: 0 transparent;
                background-color: transparent;
                outline: 0;
                border: 0;
                cursor: pointer;
                font-family: Arial;
            }
            .item-main {
                color: #dadada;
                font-weight: 500;
                font-size: large;
                border-bottom: 0 transparent;
                background-color: transparent;
                outline: 0;
                border: 0;
                font-family: Arial;
                font-weight: bold;
            }
            .menu-label {
                color: #dadada;
                margin-left: 20px;
                margin-bottom: -1rem;
                font-weight: 500;
                font-size: large;
                border-bottom: 0 transparent;
                background-color: transparent;
                font-family: Arial;
            }
            .item-link:hover {
                color: #fff;
                outline: 0;
            }
            .item-link:focus {
                outline: 0;
            }
            .separator {
                margin: 20px auto;
                display: block;
                border: 1px solid #dededc;
                height: 0;
                width: 40%;
            }
            .sub-list {
                position: relative;
                margin-bottom: 0;
                font-size: 1.6rem;
                margin-top: 0;
            }
            .sub-item {
                padding: 0;
                height: 0;
                overflow: hidden;
                opacity: 0.1;
                position: relative;
                font-size: small;
                margin: 0;
                list-style: none;
                transition: opacity ease 750ms, height linear 750ms;
            }
            .sub-item-expanded {
                opacity: 1;
                height: 4.5rem;
                transition: opacity ease 750ms, height linear 750ms;
            }
            .sub-item-link {
                font-size: medium;
                position: relative;
                color: #dadada;
                font-weight: 500;
                border-bottom: 0 transparent;
                text-decoration: none;
                background-color: transparent;
                font-style: normal;
                top: 10px;
                font-family: Arial;
            }
            .sub-item-link:hover {
                border-bottom: none;
                color: #fff;
            }
        </style>
        <nav id="menu" class="menu ${menuVisible ? 'menu-open' : ''}">
            <ul class="menu-list">
                            <li class="item">
                    <i class="fas fa-home icon" />
                    <p
                        class="item-main"
                    >
                        MENU SOCIAL ÉPOQUE
                    </p>
                </li>
                <li class="item">
                    <i class="fas fa-home icon" />
                    <a
                        href="${prefixUriIfNeeded('/')}"
                        title="Home"
                        class="item-link"
                        onClick=${avoidReload}
                    >
                        Blog Social Époque
                    </a>
                </li>
                <li class="item">
                    <i class="fas fa-plus icon" />
                    <a
                        href="${prefixUriIfNeeded('/about')}"
                        title="About"
                        class="item-link"
                        onClick=${avoidReload}
                    >
                        About Social Époque
                    </a>
                </li>
                <li class="item">
                <i class="fas fa-pen icon" />
                <a
                    href="${prefixUriIfNeeded('/requirements')}"
                    title="Publish your article"
                    class="item-link"
                    onClick=${avoidReload}
                >
                     Publish your article
                </a>
            </li>
            <li class="item">
            <i class="fas fa-user icon"  />
            <a
                href="${prefixUriIfNeeded('/network')}"
                title="Network"
                class="item-link"
                onClick=${avoidReload}
            >
                 Network
            </a>
        </li>
                <li class="item">
                <i class="fas fa-calculator icon" />
                <a
                    href="${prefixUriIfNeeded('/calculay')}"
                    title="Calculay - the project"
                    class="item-link"
                    onClick=${avoidReload}
                >
                    Calculay - the project
                </a>
            </li>
                <li class="item">
                    <i class="fas fa-paper-plane icon" />
                    <a
                        href="${prefixUriIfNeeded('/contact')}"
                        title="Contact"
                        class="item-link"
                        onClick=${avoidReload}
                    >
                        Contact us
                    </a>
                </li>
            </ul>
        </nav>`
}
