export type CarouselProps = {
    dots: boolean,
    draggble: boolean,
    slidesToShow: number,
    arrows: boolean,
    responsive: {
        breakpoint: number;
        settings: {
            slidesToShow: number,
            dots: boolean
        }
    } []
}


export interface ColabLogoProps {
    logos: string[]
    settings: CarouselProps
}