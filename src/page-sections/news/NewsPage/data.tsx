import new1 from '../assets/new1.png';
import new2 from '../assets/new2.png'

export const title = 'Get the latest news, press releases, and announcements, offering expert insights into industry trends:';

export type NewsContent = {
    image: string,
    data: string,
    title: string,
    content: string
}

export const news: NewsContent[] = [
    {
        image: new1.src,
        data: '10 Apr 2024',
        title: 'RCI Holding Appoints Agatha Peptea as Chief Transformation OfficerCiga Energy ',
        content: 'RomCapital Invest SA announces the appointment of Agatha Peptea as the new Chief Transformation Officer at the Holding level. With over 20 years of senior management experience, Agatha brings a wealth of expertise in driving strategic change and sustainability initiatives within the energy sector.'
    },
    {
        image: new2.src,
        data: '16 Feb 2024',
        title: 'Ciga Energy Epic Signs Contract for 295 MW Natural Gas Power Plant in Craiova',
        content: 'Ciga Energy Epic , a distinguished member of the RCI Holding of companies, proudly announces our new partnership with Electrocentrale Craiova S.A. (CCGT Craiova) to provide Owner\'s Engineer Services for the construction of a 295 MW natural gas power plant in Craiova.'
    },
    {
        image: new1.src,
        data: '16 Feb 2024',
        title: 'RomCapital Invest Welcomes Catalin Balan as New Compliance Manager',
        content: 'RomCapital Invest , a distinguished member of the RCI Holding of companies, proudly announces the appointment of Catalin Balan as its new Compliance Manager at Holding level.'
    },
    {
        image: new1.src,
        data: '16 Feb 2024',
        title: 'RomCapital Invest Welcomes Catalin Balan as New Compliance Manager',
        content: 'RomCapital Invest , a distinguished member of the RCI Holding of companies, proudly announces the appointment of Catalin Balan as its new Compliance Manager at Holding level.'
    },
    {
        image: new1.src,
        data: '16 Feb 2024',
        title: 'RomCapital Invest Welcomes Catalin Balan as New Compliance Manager',
        content: 'RomCapital Invest , a distinguished member of the RCI Holding of companies, proudly announces the appointment of Catalin Balan as its new Compliance Manager at Holding level.'
    },
    {
        image: new2.src,
        data: '16 Feb 2024',
        title: 'Ciga Energy Epic Signs Contract for 295 MW Natural Gas Power Plant in Craiova',
        content: 'Ciga Energy Epic , a distinguished member of the RCI Holding of companies, proudly announces our new partnership with Electrocentrale Craiova S.A. (CCGT Craiova) to provide Owner\'s Engineer Services for the construction of a 295 MW natural gas power plant in Craiova.'
    },
]