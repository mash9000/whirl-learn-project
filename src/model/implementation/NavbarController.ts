import type {INavbarController} from "../interfaces/INavbarController.ts";
import type {IPointOfNavbar} from "../interfaces/IPointOfNavbar.ts";
import {AppConfig} from "../../data/AppConfig.ts";
import {ErrorNavbarController} from "../Errors/ErrorNavbarController.ts";

export class NavbarController implements INavbarController {

    private readonly list: IPointOfNavbar[] = [];

    public addPoint(title: string, link: URL): void {
        if (this.list.length > AppConfig.MAXIMUM_POINTS_OF_NAVBAR)
            throw new ErrorNavbarController(`превышен лимит количества пунктов меню в навбаре (максимум ${AppConfig.MAXIMUM_POINTS_OF_NAVBAR})`);
        this.checkTitle(title);
        this.list.push({getTitle: () => title, getLink: () => link});
    }

    private checkTitle(title: string): void {
        this.checkTheTitleForEmptiness(title);
        this.checkTheTitleForSpaces(title);
    }

    private checkTheTitleForEmptiness(title: string): void {
        if (title === '')
            throw new ErrorNavbarController('пункт не должен быть пустым');
    }

    private checkTheTitleForSpaces(title: string): void {
        const pattern: RegExp = /\s+/g;
        if (pattern.test(title))
            throw new ErrorNavbarController('пункт не должен состоять из пробелов');
    }

    public getPoints(): IPointOfNavbar[] {
        if (this.list.length === 0)
            throw new ErrorNavbarController(`в навбаре должно быть не менее ${AppConfig.MINIMUM_POINTS_OF_NAVBAR} пункт(-а)`);
        return [...this.list];
    }
}