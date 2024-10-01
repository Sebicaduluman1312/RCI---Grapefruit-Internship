import basicUser from '../assets/Vector.png';
import { HumanProfile } from '@/components/HumanCarousel/interface';

export const carouselSettings = {
    dots: false,
    draggble: false,
    slidesToShow: 5,
    responsive: [
          {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                arrows: true,
            }
          },
          {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
          },
    ],
    arrows: true,
};

export const teamContent = 'They lead strategic initiatives that empower communities, promote sustainability, and foster a culture of excellence and integrity. '

export const linkData = 'View the team\'s organisational chart';

export const teamPeople: HumanProfile[] = [
    {
        photo: basicUser.src,
        name: 'Dan STRATAN',
        position: 'CEO / Owner'
    }, 
    {
        photo: basicUser.src,
        name: 'Cristina POPESCU',
        position: 'Chief Operating Officer (COO)'
    },
    {
        photo: basicUser.src,
        name: 'Frank HAJDINJAK',
        position: 'Chief Strategy Officer'
    },
    {
        photo: basicUser.src,
        name: 'Cecilia PANA',
        position: 'Chief Growth Officer (Romania)'
    },
    {
        photo: basicUser.src,
        name: 'Silvia DULGHERU',
        position: 'Chief Growth Officer/PR & Communication'
    }
]