import { ButtonProps } from "@/components/BaseButton/interface";
import { ContentItem } from "@/components/CustomContent/interface";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export const btnData: ButtonProps = {
    style: 'solid',
    IconComponent: IoArrowForwardCircleOutline,
    content: 'Find out more',
    link: '/contact'
};


export const customContentHistory: ContentItem[] = [
    {tag: 'h2', content: 'Detailed company history and background'},
    {tag: 'p', content: 'Our expertise spans Energy, Engineering, Financial Services, and cutting-edge Technology Solutions. Central to our approach is a diverse portfolio of specialized companies covering the entire spectrum of project cycle and business consulting. From Advisory Services and Technical Consulting to Engineering, Sustainability (ESG) Services, Regulatory Consulting, and IT&C Consulting, we deliver comprehensive solutions tailored to the unique needs of each client.'},
]