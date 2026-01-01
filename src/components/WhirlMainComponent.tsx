import '../styles/whirl-main-component/whirl-main-component.scss';
import '../styles/fact-card/__box/fact-card__box.scss';
import {Header} from "./Header.tsx";
import {AppConfig} from "../data/AppConfig.ts";
import {Wrapper} from "./Wrapper.tsx";
import {TrustedCompanies} from "./TrustedCompanies.tsx";
import {FactCard} from "./FactCard.tsx";

export const WhirlMainComponent = () => {
    return (
        <>
            <Header points={AppConfig.NAVBAR_POINTS}
                    signIn={AppConfig.SIGN_IN_LINK_PROPERTIES}
                    bookADemo={AppConfig.BOOK_A_DEMO_BUTTON_PROPERTIES}/>
            <Wrapper bookADemo={AppConfig.BOOK_A_DEMO_BUTTON_PROPERTIES}
                     wrapperData={AppConfig.WRAPPER_DATA}/>
            <TrustedCompanies data={AppConfig.TRUSTED_COMPANIES}/>
            <div className='fact-card__box'>
                <FactCard/>
            </div>
        </>
    )
}