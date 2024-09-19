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