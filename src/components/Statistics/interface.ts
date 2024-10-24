export interface StatisticsProps {
    data: Array<{
        title: string;
        leftString?: string;
        number?: number;
        rightString?: string;
        implemented?: boolean;
        iso: string,
    }>
}