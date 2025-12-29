import type {IPointOfNavbar} from "./IPointOfNavbar.ts";

export interface INavbarController {
    getPoints(): IPointOfNavbar[];
}