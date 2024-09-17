import { PiBank } from "react-icons/pi";
import { PiGear } from "react-icons/pi";
import { PiCircuitryLight } from "react-icons/pi";
import { PiLightning } from "react-icons/pi";
import { TbBriefcase2 } from "react-icons/tb";



export const cards = [
    {
        icon: PiBank,
        title: 'Financial Advisory and Sloutions',
        link: '/contact'
    },
    {
        icon: PiGear,
        title: 'Consulting Engineering',
        link: '/contact'
    },
    {
        icon: PiCircuitryLight,
        title: 'Digital Innovation & Technology',
        link: '/contact'
    },
    {
        icon: PiLightning,
        title: 'Energy Markets',
        link: '/contact'
    },
    {
        icon: TbBriefcase2,
        title: 'Management Consultancy',
        link: '/contact'
    }
]

export const carouselSettings = {
    dots: true,
    autoplay: true
}