import type {IColor} from "./IColor.ts";

export interface IFactCard {
    getNameOfImage(): string;

    getTitle(): string;

    getParagraph(): string;

    getBgColor(): IColor;
}