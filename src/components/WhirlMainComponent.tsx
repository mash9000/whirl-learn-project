import '../styles/whirl-main-component/whirl-main-component.scss';
import {Header} from "./Header.tsx";
import {AppConfig} from "../data/AppConfig.ts";

export const WhirlMainComponent = () => {
    return (
        <Header points={AppConfig.NAVBAR_POINTS}
                signIn={AppConfig.SIGN_IN_PROPERTIES}/>
    )
}