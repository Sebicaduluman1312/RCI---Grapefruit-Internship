type Heading = {
    title: string,
    icon: React.ReactNode
}


export interface CompaniesNetworkProps {
    heading: Heading,
    companies: string[],
    services: string[][]
}