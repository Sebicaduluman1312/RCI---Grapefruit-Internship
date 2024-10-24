type MemberData = {
    photo: string,
    name: string,
    position: string
}

export interface ProfileListProps {
    title?: string,
    subtitle?: string,
    members: MemberData[],
    setModal: (modal: boolean) => void
}
