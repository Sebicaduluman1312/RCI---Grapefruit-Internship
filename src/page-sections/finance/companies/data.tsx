import { CarouselProps } from '@/components/ColabLogos/interface';

import logo1 from '../assets/logof1.png';
import logo2 from '../assets/logof2.png';
import logo3 from '../assets/logof3.png';

export const logos = [   
    logo1.src,
    logo2.src,
    logo3.src,
]

export const carouselSettings: CarouselProps = {
    dots: false,
    draggble: false,
    slidesToShow: 3,
    responsive: [
          {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
          },
    ],
    arrows: false,
};