import { html } from '../lib/htm-preact.js';
import { Page } from '../components/layout/page.js';
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js';
import { PostsAndCategories } from '../components/layout/postsAndCategories.js';

// Helper function to set favicon
const setFavicon = (href) => {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/x-icon';
        document.head.appendChild(favicon);
    }
    favicon.href = href;
};

export const Home = ({ state, dispatch }) => {
    // Set the specific favicon for the Home page
    setFavicon(prefixUriIfNeeded('/assets/socialepoque.ico'));

    return html`
        <${Page}
            title="Social Époque blog"
            subtitle="Academic blog about Education and sex minorities topic"
            sidebarImage=${prefixUriIfNeeded('/assets/default-sidebar.jpg')}
        >
            <${PostsAndCategories} state=${state} dispatch=${dispatch} />
        <//>
    `;
};
