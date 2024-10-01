import basicUser from '../assets/Vector.png';
import profile1 from '../assets/profile1.png';

export const heading = {
    title: 'RCI Holding\'s executive team leads with expertise in financial advisory, engineering, digital innovation, energy markets, and management consultancy. They drive strategic initiatives that empower communities and promote sustainability, fostering a culture of excellence and integrity.',
    label: 'executive team'
}

export const settingsFull = {
    dots: false,
    draggble: false,
    slidesToShow: 5,
    variableWidth: true,
    responsive: [
          {
            breakpoint: 1100,
            settings: {
                slidesToShow: 4,
                arrows: true,
            }
          },
          {
            breakpoint: 875,
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

export const profile = {
    image: profile1.src,
    name: 'Dana Alexe',
    position: 'Human Resources',
    description: `
        Mauris vel rutrum metus. Aenean gravida sollicitudin elit in fermentum. Sed in vulputate nisi. Nam laoreet tincidunt ex. Praesent ultricies efficitur ultricies. Nunc dictum eu felis sit amet tincidunt. Fusce pretium, justo quis sagittis rhoncus, orci elit imperdiet enim, sed facilisis nisi libero sed purus. Fusce interdum ipsum sit amet nisi aliquet hendrerit.
        <br /><br />
        Donec faucibus odio massa, iaculis feugiat mauris cursus a. Fusce placerat consectetur rhoncus. Sed lacinia eros in aliquam fermentum. In semper luctus pellentesque. Fusce in ante non ex egestas laoreet. Pellentesque urna velit, pellentesque sit amet ante vitae, molestie bibendum risus. Nulla a pharetra lectus. Maecenas vulputate tellus accumsan arcu porta, ac congue felis vestibulum. Nulla porttitor sit amet felis ut pulvinar.
    `
}

export const profiles = [
    {
        title: 'RCI Holding Executive Office',
        members: [
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
    },
    {
        title: 'International Business Support',
        members: [
            {
                photo: basicUser.src,
                name: 'Mania Ghini',
                position: 'Greece - Managing Partner'
            },
            {
                photo: basicUser.src,
                name: 'Jelena Simovic',
                position: 'Western Balkans - Managing Partner'
            }
        ]
    },
    {
        title: 'RCI Holding Pilliers Management',
        subtitle: 'Consulting Enginnering',
        members: [
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
    },
    {
        subtitle: 'Financial Services',
        members: [
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
    },
    {
        subtitle: 'Technology',
        members: [
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
    },
    {
        subtitle: 'Energy markets',
        members: [
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
    },
    {
        subtitle: 'Management Consulting',
        members: [
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
]