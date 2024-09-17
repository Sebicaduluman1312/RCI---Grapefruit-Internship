import iso1 from '../../page-sections/about/assets/iso1.png'
import iso2 from '../../page-sections/about/assets/iso2.png'
import iso3 from '../../page-sections/about/assets/iso3.png'
import iso4 from '../../page-sections/about/assets/iso4.png'


export const isos = [
    iso1.src,
    iso2.src,
    iso3.src,
    iso4.src 
]


export const carouselSettings = {
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