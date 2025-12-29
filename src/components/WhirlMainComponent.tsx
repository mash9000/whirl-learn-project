import '../styles/whirl-main-component/whirl-main-component.scss';
import {Header} from "./Header.tsx";
import {getNavbarGetPoints} from "../data/NavbarGetPoints.ts";

export const WhirlMainComponent = () => {
    return (
        <Header points={getNavbarGetPoints().getPoints()}/>
    )
}