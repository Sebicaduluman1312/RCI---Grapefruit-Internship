import { IoArrowForwardCircleOutline } from "react-icons/io5"

import { ButtonProps } from "@/components/BaseButton/interface";

export const welcomeHeading = {
    label: 'Company',
    title: 'Welcome to RCI Holding',
    paragraph: 'Since establishment in 2000, we\'re dedicated to empowering communities for a sustainable future. From headquarters in Bucharest, Romania, and subsidiary offices in Athens, Greece, and Chisinau, Moldova, we extend our reach across 14 countries in Central and Eastern Europe, as well as the Caucasus region.'

}

export const btnData: ButtonProps = {
    style: 'solid',
    IconComponent: IoArrowForwardCircleOutline,
    content: 'Find out more',
    link: '/contact'
};
