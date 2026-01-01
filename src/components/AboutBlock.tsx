import '../styles/about-block/about-block.scss';
import '../styles/about-block/__heading/about-block__heading.scss';
import type {IFactCard} from "../model/interfaces/IFactCard.ts";
import {FactCard} from "./FactCard.tsx";

type AboutBlockProps = {
    factData: IFactCard[]
}

export const AboutBlock = ({factData}: AboutBlockProps) => {
    return (
        <div className="about-block">
            <h3 className='about-block__heading'>What's Whirl all about?</h3>
            {
                factData.map((card: IFactCard) =>
                    <FactCard key={card.getTitle()} factData={card}
                              pathToTheFolder={'../../public/images/about-block/'}/>)
            }
        </div>
    );
}