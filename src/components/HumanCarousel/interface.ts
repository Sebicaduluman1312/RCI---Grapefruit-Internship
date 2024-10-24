import { CarouselProps } from 'antd';

export type HumanProfile = {
    photo: string,
    name: string,
    position:string
}

export interface HumanProfileProps{
    team: HumanProfile[],
    settings: CarouselProps,
    subtitle?: string,
}