export type HumanProfile = {
    photo: string,
    name: string,
    position:string
}

export interface HumanProfileProps{
    team: HumanProfile[],
    role?: string
}