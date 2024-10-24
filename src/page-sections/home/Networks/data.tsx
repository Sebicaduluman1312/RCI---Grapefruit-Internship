import { CarouselProps } from '@/components/ColabLogos/interface';
import logo1 from './../assets/logo1.png';
import logo2 from './../assets/logo2.png';
import logo3 from './../assets/logo3.png';
import logo4 from './../assets/logo4.png';



import { ButtonProps } from "@/components/BaseButton/interface"

export const headingDataNetworks = {
    label: 'Network of companies',
    paragraph: 'Central to our approach is a diverse portfolio of specialized companies covering the entire spectrum of project cycle and business consulting. From Advisory Services and Technical Consulting to Engineering, Sustainability (ESG) Services, Regulatory Consulting, and IT&C Consulting we deliver comprehensive solutions tailored to the unique needs of each client'
}

export const btnData: ButtonProps = {
    link: '/contact',
    style: 'regular',
    content: 'Discover all'
}

export const logos = [
    logo1.src,
    logo2.src,
    logo3.src,
    logo4.src
]

export const carouselSettings: CarouselProps = {
    dots: false,
    draggble: false,
    slidesToShow: 4,
    responsive: [
          {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
          },
    ],
    arrows: false,
};