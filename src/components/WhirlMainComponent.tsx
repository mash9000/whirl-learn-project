import '../styles/whirl-main-component/whirl-main-component.scss';
import {Header} from "./Header.tsx";
import {NavbarController} from "../model/implementation/NavbarController.ts";

export const WhirlMainComponent = () => {
    const navbarController = new NavbarController();
    navbarController.addPoint('Features', new URL('http://localhost:8080'));
    navbarController.addPoint('Pricing', new URL('http://localhost:8080'));
    navbarController.addPoint('Integrations', new URL('http://localhost:8080'));
    navbarController.addPoint('Learn', new URL('http://localhost:8080'));

    return (
        <Header points={navbarController.getPoints()}/>
    )
}