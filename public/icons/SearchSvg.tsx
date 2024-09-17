import { SvgProps } from "./interface"

export const SearchSvg = (props: SvgProps) => {

    const { callback } = props; 

    return (
        <svg onClick={callback} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22.2676L17.5 17.7676M20 11.2676C20 16.2381 15.9706 20.2676 11 20.2676C6.02944 20.2676 2 16.2381 2 11.2676C2 6.29702 6.02944 2.26758 11 2.26758C15.9706 2.26758 20 6.29702 20 11.2676Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}