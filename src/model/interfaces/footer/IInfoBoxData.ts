export interface IInfoBoxData {
    getHeading(): string;

    getItems(): { title: string, link: URL }[];
}