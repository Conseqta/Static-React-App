import { useEffect } from 'react'

interface PageMeta {
  title: string
  description?: string
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    if (description) {
      let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.content = description
    }
  }, [title, description])
}
