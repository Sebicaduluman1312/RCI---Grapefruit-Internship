import { ButtonProps } from '@/components/BaseButton/interface';

import projectImage1 from '../assets/Rectangle2.png';
import projectImage2 from '../assets/Rectangle3.png';

export const projectsData = {
    title: 'Projects by RCI',
    label: 'Projects',
    paragraph: 'Discover a relevant selection of projects spanning various selectors of activity and geographies, shocasing out exeprtise and commitment to excellence'
}

export const projects = [
    {
        title: 'LAMDA DEVELPOMENT-Ellinikon',
        image: projectImage2.src,
        link: '',
        cardParagraph: 'Environmental impact assessment'
    },
    {
        title: 'Public power Corporation (PPC)',
        image: projectImage1.src,
        link: '',
        cardParagraph: 'Estimating the carbon footprint of projects and produscts/services'
    }
]

export const btnData: ButtonProps = {
    link: '/contact',
    style: 'regular',
    content: 'Explore more projects'
}