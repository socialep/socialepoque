import { html } from '../lib/htm-preact.js'

import { Page } from '../components/layout/page.js'
import prefixUriIfNeeded from '../utils/prefixUriIfNeeded.js'
import { PostsAndCategories } from '../components/layout/postsAndCategories.js'

export const Home = ({ state, dispatch }) => html` <${Page}
    title="Social Époque blog"
    subtitle="Academic blog about Education and sex minorities topic"
    sidebarImage=${prefixUriIfNeeded('/assets/default-sidebar.jpg')}
>
    <${PostsAndCategories} state=${state} dispatch=${dispatch} />
<//>`
