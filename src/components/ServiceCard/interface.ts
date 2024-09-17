import { IconType } from "react-icons";

export interface ServiceCardProps{
    data: {
        icon: IconType,
        title: string,
        link: string,
    }
}