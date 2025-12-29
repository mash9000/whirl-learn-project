import type {IHighLink} from "./IHighLink.ts";

export interface IWrapper {
    getHeading(): string;

    getDescription(): string;

    getLearnMoreLinkData(): IHighLink
}