import { IconType } from "react-icons";

export interface ButtonProps{
    style?: 'solid' | 'regular',
    IconComponent?: IconType,
    content: string,
    link?: string,
    callback?: () => void;
}

