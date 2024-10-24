export const carouselSettings = {
    dots: true,
    draggble: false,
    slidesToShow: 3,
    responsive: [
          {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
          },
          {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
          },
    ],
    arrows: false,
};