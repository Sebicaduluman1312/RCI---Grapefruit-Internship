export interface HeroProps {
    data: SlideProps[],
}

export interface SlideProps {
    title?: string;
    description?: string;
    background: string;
    tags?: string[];
}
