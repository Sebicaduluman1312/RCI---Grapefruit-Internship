import basicUser from '../assets/Vector.png';

export const heading = {
    title: 'RCI Holding\'s executive team leads with expertise in financial advisory, engineering, digital innovation, energy markets, and management consultancy. They drive strategic initiatives that empower communities and promote sustainability, fostering a culture of excellence and integrity.',
    label: 'executive team'
}

export const settingsFull = {
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

export const settings4 = {
    dots: false,
    draggble: false,
    slidesToShow: 4,
    responsive: [
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

export const settings3 = {
    dots: false,
    draggble: false,
    slidesToShow: 3,
    responsive: [
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

export const settings2 = {
    dots: false,
    draggble: false,
    slidesToShow: 2,
    arrows: true
};


export const executiveOffice = {
    settings: settingsFull,
    team: [
        {
            photo: basicUser.src,
            name: 'Dan Stratan',
            position: 'CEO / Owner'
        },
        {
            photo: basicUser.src,
            name: 'Cristina Popescu',
            position: 'Chief Operating Officer(COO)'
        },
        {
            photo: basicUser.src,
            name: 'Frank Hajdinjak',
            position: 'Chief Strategy Officer'
        },
        {
            photo: basicUser.src,
            name: 'Cecilia Pana',
            position: 'Chief Growth Officer Romania'
        },
        {
            photo: basicUser.src,
            name: 'Silvia Dulgheru',
            position: 'Chief Growth Officer International'
        },
        {
            photo: basicUser.src,
            name: 'Agatha Peptea',
            position: 'CEO / Owner'
        },
        {
            photo: basicUser.src,
            name: 'Alina Iancu',
            position: 'Chief People Officer'
        },
        {
            photo: basicUser.src,
            name: 'Silvia Trifu',
            position: 'Chief Financial Officer'
        },
        {
            photo: basicUser.src,
            name: 'Georgeta Delureanu',
            position: 'Accounting'
        },
        {
            photo: basicUser.src,
            name: 'Roxana Radulescu',
            position: 'Procurement Director'
        }
    ]
}

export const internationalBusiness = {
    settings: settings2,
    team: [
        {
            photo: basicUser.src,
            name: 'Mania Ghini',
            position: 'Greece - Managing Partner'
        },
        {
            photo: basicUser.src,
            name: 'Jelena Simovic',
            position: 'Western Balkans - Managing Partner'
        },
    ]
}

export const consulting = {
    subtitle: 'Consulting Enginnering',
    settings: settings4,
    team: [
        {
            photo: basicUser.src,
            name: 'Nadia Popescu',
            position: 'Managing Director, Tecnic Consulting Engineering'
        },
        {
            photo: basicUser.src,
            name: 'Mihaela Toader',
            position: 'RCI Technical Assistant Director'
        },
        {
            photo: basicUser.src,
            name: 'Silvia Dulgheru',
            position: 'RCI Lead CM Services Environment'
        },
        {
            photo: basicUser.src,
            name: 'Robert Ivan',
            position: 'CEO Ciga Energy Epic'
        },
    ]
}

export const financial = {
    subtitle: 'Financial Services',
    settings: settings4,
    team: [
        {
            photo: basicUser.src,
            name: 'Cristina Badica',
            position: 'RCI Director EU Funds'
        },
        {
            photo: basicUser.src,
            name: 'Mihaela Toader',
            position: 'RCI Technical Assistant Director'
        },
        {
            photo: basicUser.src,
            name: 'Monica Mandru',
            position: 'RCI Director Financial Solutions'
        },
        {
            photo: basicUser.src,
            name: 'Ovidiu Rata',
            position: 'Managing Director Relians'
        },
    ]
}

export const technology = {
    subtitle: 'Technology',
    settings: settings3,
    team: [
        {
            photo: basicUser.src,
            name: 'Giani Radau',
            position: 'CEO CIMA Data Analytics'
        },
        {
            photo: basicUser.src,
            name: 'Matei Stratan',
            position: 'CEO Ogre AI'
        },
        {
            photo: basicUser.src,
            name: 'Paul Musca',
            position: 'CEO Diomedes'
        },
    ]
}

export const energyMarkets = {
    subtitle: 'Energy Markets',
    settings: settingsFull,
    team: [
        {
            photo: basicUser.src,
            name: 'George Budurea',
            position: 'Managing Partner BRP'
        },
        {
            photo: basicUser.src,
            name: 'Frank Hajdinjak',
            position: 'CSO'
        },
        {
            photo: basicUser.src,
            name: 'Raul Toma',
            position: 'Managing Director Evolve'
        },
        {
            photo: basicUser.src,
            name: 'Cristian Popescu',
            position: 'Managing Director CINTA'
        },
        {
            photo: basicUser.src,
            name: 'Gabriela Budurea',
            position: 'Managing Partner Entrex'
        },
        {
            photo: basicUser.src,
            name: 'Cristina Popescu',
            position: 'Managing Director Ciga Energy'
        },
        {
            photo: basicUser.src,
            name: 'Zoltan Nagy-Bege',
            position: 'Director Energy Markets'
        },
        {
            photo: basicUser.src,
            name: 'Raul Pascal',
            position: 'Director ORI'
        },
    ]
}

export const managementConsulting = {
    subtitle: 'Management Consulting',
    settings: settingsFull,
    team: [
        {
            photo: basicUser.src,
            name: 'Cristina Popescu',
            position: 'Managing Director Ciga Energy'
        },
        {
            photo: basicUser.src,
            name: 'Giani Radu',
            position: 'CEO CIMA Data Analytics'
        },
        {
            photo: basicUser.src,
            name: 'Tudor Montescu',
            position: 'Lead Business Strategy Consulting'
        },
        {
            photo: basicUser.src,
            name: 'Cristian Ionescu',
            position: 'Managing Director Ciga Energy Advisory'
        },
        {
            photo: basicUser.src,
            name: 'Gabriel Hancu',
            position: 'Director Triton'
        },
    ]
}