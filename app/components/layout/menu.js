import { html, useState, useEffect } from '../../lib/htm-preact.js';
import { avoidReload } from '../../utils/avoidReload.js';
import prefixUriIfNeeded from '../../utils/prefixUriIfNeeded.js';
import { MenuBurger } from './MenuBurger.js'; // Import the MenuBurger component

export const Menu = ({ categories, articles }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    // Handle screen resize
    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
        if (window.innerWidth > 768) {
            setMenuVisible(false); // Ensure menu is hidden for wider screens
        }
    };

    // Toggle menu visibility
    const toggleMenuVisible = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        // Initialize and listen for resize events
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return html`
        <style>
  .menu {
    background-color: black;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    overflow-x: hidden;
    transition: width 0.3s ease, opacity 0.3s ease;
    z-index: 10; /* Appears over main content */
    opacity: 0;
    visibility: hidden; /* Add visibility to hide it fully */
}

.menu-open {
    width: 75%; /* Adjust width as needed */
    opacity: 1;
    visibility: visible; /* Make it visible when open */
}

@media (min-width: 768px) {
    .menu {
        display: flex;
        flex-direction: column;
        width: 30%;
        background-color: black;
        opacity: 1;
        visibility: visible; /* Always visible on larger screens */
    }
    .menu-open {
        width: auto;
    }
}

            .menu-list {
                list-style: none;
                padding: 2rem;
                margin: 0;
            }
            .menu-list li {
                margin: 1rem 0;
                cursor: pointer;
            }
            .menu-list a {
                text-decoration: none;
                color: inherit;
                font-size: 1.6rem;
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
                margin-top: 50px;
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
                color: gray;
                outline: 0;
            }
            .item-link:focus {
                outline: 0;
            }

        </style>
        <!-- MenuBurger Button -->
        ${isSmallScreen &&
        html`
            <${MenuBurger} toggleMenuVisible=${toggleMenuVisible} />
        `}
        <!-- Menu navigation -->
        <nav class="menu ${menuVisible ? 'menu-open' : ''}">
            <ul class="menu-list">
                      <p
                        class="item-main"
                    >
                        MENU SOCIAL ÉPOQUE
                    </p>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/')}" onClick=${avoidReload}>
                        Blog Social Époque
                    </a>
                </li>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/about')}" onClick=${avoidReload}>
                        About Social Époque
                    </a>
                </li>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/requirements')}" onClick=${avoidReload}>
                        Publish your article
                    </a>
                </li>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/network')}" onClick=${avoidReload}>
                        Network
                    </a>
                </li>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/calculay')}" onClick=${avoidReload}>
                        Calculay - the project
                    </a>
                </li>
                <li class="item">
                    <a class="item-link" href="${prefixUriIfNeeded('/contact')}" onClick=${avoidReload}>
                        Contact us
                    </a>
                </li>
            </ul>
        </nav>
    `;
};
