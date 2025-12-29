import type {INavbarController} from "../model/interfaces/INavbarController.ts";
import {NavbarController} from "../model/implementation/NavbarController.ts";

export const getNavbarGetPoints = (): INavbarController => {
    const navbarController: NavbarController = new NavbarController();
    navbarController.addPoint('Features', new URL('http://localhost:8080'));
    navbarController.addPoint('Pricing', new URL('http://localhost:8080'));
    navbarController.addPoint('Integrations', new URL('http://localhost:8080'));
    navbarController.addPoint('Learn', new URL('http://localhost:8080'));
    return navbarController;
}