export interface INewsletterData {
    getHeading(): string;

    getParagraph(): string;

    getInputProperties(): { type: "text" | "email", placeholder: string }
}