import { html } from '../lib/htm-preact.js';
import { Page } from '../components/layout/page.js';
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js';
import { PostsAndCategories } from '../components/layout/postsAndCategories.js';

const setAppIcons = ({
  title = 'Social Époque blog',
  favicon = '/assets/socialepoque.ico',
  appleTouchIcon = '/assets/apple-touch-icon.png',
  manifest = '/manifest.json',
  themeColor = '#000000',
} = {}) => {
  const setLink = ({ rel, href, type, sizes }) => {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    if (type) el.setAttribute('type', type);
    if (sizes) el.setAttribute('sizes', sizes);
  };

  const setMeta = ({ name, content }) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  document.title = title;

  setLink({
    rel: 'icon',
    href: prefixUriIfNeeded(favicon),
    type: favicon.endsWith('.png') ? 'image/png' : 'image/x-icon',
  });

  setLink({
    rel: 'apple-touch-icon',
    href: prefixUriIfNeeded(appleTouchIcon),
    sizes: '180x180',
    type: 'image/png',
  });

  setLink({
    rel: 'manifest',
    href: prefixUriIfNeeded(manifest),
  });

  setMeta({ name: 'theme-color', content: themeColor });
  setMeta({ name: 'apple-mobile-web-app-capable', content: 'yes' });
  setMeta({ name: 'apple-mobile-web-app-status-bar-style', content: 'default' });
  setMeta({ name: 'apple-mobile-web-app-title', content: title });
  setMeta({ name: 'mobile-web-app-capable', content: 'yes' });
};

export const Home = ({ state, dispatch }) => {
  setAppIcons({
    title: 'Social Époque blog',
    favicon: '/assets/socialepoque.ico',
    appleTouchIcon: '/assets/apple-touch-icon.png',
    manifest: '/manifest.json',
    themeColor: '#000000',
  });

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