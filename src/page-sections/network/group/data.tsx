import fin1 from '../assets/fin1.png';
import fin2 from '../assets/fin2.png';
import fin3 from '../assets/fin3.png';
import fin4 from '../assets/fin4.png';
import fin5 from '../assets/fin5.png';
import fin6 from '../assets/fin6.png';
import fin7 from '../assets/fin7.png';
import fin8 from '../assets/fin8.png';
import fin9 from '../assets/fin9.png';
import fin10 from '../assets/fin10.png';
import fin11 from '../assets/fin11.png';
import fin12 from '../assets/fin12.png';
import fin13 from '../assets/fin13.png';
import fin14 from '../assets/fin14.png';
import fin15 from '../assets/fin15.png';


/// icons
import MuseumSvg from '../../../../public/icons/MuseumSvg';
import SettingsSvg from '../../../../public/icons/SettingsSvg';
import BranchSvg from '../../../../public/icons/BranchSvg';
import EnergySvg from '../../../../public/icons/EnergySvg';


/// props
import { CompaniesNetworkProps } from '@/components/CompaniesNetwork/interface';

export const headingData = {
    label: 'group',
    title: 'Explore RCI Holding\'s network of specialized companies.',
    paragraph: 'We focus on four key business platforms: Energy, Engineering, Technology, and Financial Services. Our companies collaborate to deliver comprehensive and innovative solutions, addressing diverse client needs and driving sustainable growth across Central and Eastern Europe and the Caucasus region. Discover how our integrated approach and industry expertise empower communities and shape a brighter future.'
}


export const networks: CompaniesNetworkProps[] = [
    {
        heading: {
            title: 'Financial',
            icon: <MuseumSvg />
        },
        companies: [
            fin1.src,
            fin2.src,
            fin3.src
        ],
        services: [
            [
                'European Funds Consulting',
                'Reimbursable Management',
                'IFIs, Equity, M&A'
            ],
            [
                'European Funds Consulting',
                'State Aids Consulting',
            ],
            [
                'Business Consulting',
                'Technical Consulting',
                'ESD Services',
                'Focused on the energy & utilities sector'
            ]
        ]
    }, 
    {
        heading: {
            title: 'Engineering',
            icon: <SettingsSvg />
        },
        companies: [
            fin1.src,
            fin4.src,
            fin5.src,
            fin6.src
        ],
        services: [
            [
                'Environmental Techincal',
                'Assistance and Supervision',
                'Water & Wastewater, Waste',
                'Defense',
                'Public Affairs'
            ],
            [
                'Owner\'s Engineering for energy projects',
                'EPC for energy projects',
            ],
            [
                'Contract Management',
                'Claims Management',
            ],
            [
                'Contract Management',
                'Claims Management',
            ]
        ]   
    },
    {
        heading: {
            title: 'Technology',
            icon: <BranchSvg />
        },
        companies: [
            fin7.src,
            fin8.src,
            fin9.src,
            fin10.src
        ],
        services: [
            [
                'Technology Advisory Services',
            ],
            [
                'Multi-industry AI forecasting solutions'
            ],
            [
                'High Frequency Quantitative Trading'
            ],
            [
                'Auctions Quantitative Trading'
            ]
        ]   
    },
    {
        heading: {
            title: 'Energy',
            icon: <EnergySvg />
        },
        companies: [
            fin3.src,
            fin11.src,
            fin12.src,
            fin13.src,
            fin14.src,
            fin15.src
        ],
        services: [
            [
                'Business Consulting',
                'Techincal Consulting',
                'ESG services',
                'Focused on the energy & utilities sector'
            ],
            [
                'Energy Management Services'
            ],
            [
                'Balancing Responsible Party-related Services'
            ],
            [
                'Energy Production',
                'Energy & Gas Supply',
                'Energy Asset Management'
            ],
            [
                'Balancing Responsible Party-related Services'
            ],
            [
                'Energy Production'
            ]
        ]   
    }
] 