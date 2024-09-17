export type ContentItem = {
    tag: 'h2' | 'p' | 'small',
    content: string
}

export interface CustomContentProps {
    content: ContentItem[],
    maxWidth?: boolean
}