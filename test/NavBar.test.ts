import {describe, expect, test} from "vitest";
import {INavbarController} from "../src/model/interfaces/INavbarController";
import {AppConfig} from "../src/data/AppConfig";
import {NavbarController} from "../src/model/implementation/NavbarController";

const initTestNavbarController = (): NavbarController => {
    const navbarController = new NavbarController();
    navbarController.addPoint('Features', new URL('http://localhost:8080'));
    navbarController.addPoint('Pricing', new URL('http://localhost:8080'));
    navbarController.addPoint('Integrations', new URL('http://localhost:8080'));
    navbarController.addPoint('Learn', new URL('http://localhost:8080'));
    return navbarController;
}

describe('Navbar', () => {
    const navbar: INavbarController = initTestNavbarController();

    test(`Пунктов меню не менее ${AppConfig.MINIMUM_POINTS_OF_NAVBAR}-х`, () => {
        expect.soft(navbar.getPoints().length).toBeGreaterThanOrEqual(AppConfig.MINIMUM_POINTS_OF_NAVBAR);
    });

    test(`Пунктов меню не более ${AppConfig.MAXIMUM_POINTS_OF_NAVBAR}-х`, () => {
        expect.soft(navbar.getPoints().length).toBeLessThanOrEqual(AppConfig.MAXIMUM_POINTS_OF_NAVBAR);
    });
});