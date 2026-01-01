import '../styles/whirl-main-component/whirl-main-component.scss';
import '../styles/fact-card/__box/fact-card__box.scss';
import {Header} from "./Header.tsx";
import {AppConfig} from "../data/AppConfig.ts";
import {Wrapper} from "./Wrapper.tsx";
import {TrustedCompanies} from "./TrustedCompanies.tsx";
import {FactCard} from "./FactCard.tsx";
import type {IFactCard} from "../model/interfaces/IFactCard.ts";
import {BlockOfPromises} from "./BlockOfPromises.tsx";
import {AboutBlock} from "./AboutBlock.tsx";

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
                {AppConfig.FACT_CARDS.map((card: IFactCard) =>
                    <FactCard key={card.getTitle()} factData={card}
                              pathToTheFolder={'../../public/images/card-facts/'}/>
                )}
            </div>
            <BlockOfPromises accordionItems={AppConfig.BLOCK_OF_PROMISES}/>
            <AboutBlock factData={AppConfig.ABOUT_BLOCK}/>
        </>
    )
}