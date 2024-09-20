export interface NavBarProps {
    state: boolean,
    callbackMenu: () => void;
    callbackSearch: (param: string) => void
}