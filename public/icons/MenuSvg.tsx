import { SvgProps } from "./interface"

export const MenuSvg = (props: SvgProps) => {

    const { callback } = props;

    return (
        <svg onClick={callback} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 10.9349H18.6666M10.6666 16.2682H21.3333M13.3333 21.6016H18.6666M30.6666 16.2682C30.6666 24.3684 24.1001 30.9349 15.9999 30.9349C7.89974 30.9349 1.33325 24.3684 1.33325 16.2682C1.33325 8.16805 7.89974 1.60156 15.9999 1.60156C24.1001 1.60156 30.6666 8.16805 30.6666 16.2682Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}
