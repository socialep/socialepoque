import { useEffect } from '../lib/htm-preact.js'

export const usePageMeta = (title, subtitle) => {
    useEffect(() => {
        document.title = title
            ? `${title} - Blog Social Époque`
            : 'Blog Social Époque'
    }, [title])

    useEffect(() => {
        document
            ?.querySelector('meta[name="description"]')
            ?.setAttribute('content', subtitle)
    }, [subtitle])
}
