export const serviceHeading =  {
    label: 'Services',
    title: 'Our expertise spans',
    tagColor: 'white'
}

export const carouselSettings = {
    dots: false,
    draggble: false,
    slidesToShow: 5,
    // centerMode: true,
    responsive: [
          {
            breakpoint: 1450,
            settings: {
                slidesToShow: 4,
                // centerMode: true,
            }
          },
          {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                // centerMode: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                // centerMode: true,
                // centerPadding: '30px',
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                // centerMode: true,
                // centerPadding: '15px',
            }
          },
    ],
    arrows: true,
};