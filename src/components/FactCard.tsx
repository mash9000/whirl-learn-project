import '../styles/fact-card/fact-card.scss';
import '../styles/fact-card/__icons/fact-card__icons.scss';
import '../styles/fact-card/__heading/fact-card__heading.scss';
import '../styles/fact-card/__p/fact-card__p.scss';
import type {IFactCard} from "../model/interfaces/IFactCard.ts";

type FactCardProps = {
    factData: IFactCard
}

export const FactCard = ({factData}: FactCardProps) => {
    const pathToTheFolderWithIconsForFacts: string = '../../public/images/card-facts/';
    return (
        <div className="fact-card" style={{
            backgroundColor: factData.getBgColor().getColor()
        }}>
            <img
                src={`${pathToTheFolderWithIconsForFacts}${factData.getNameOfImage()}.svg`}
                alt={`${factData.getNameOfImage()} icon`}
                className='fact-card__icons'/>
            <h5 className='fact-card__heading'>{factData.getTitle()}</h5>
            <p className='fact-card__p'>{factData.getParagraph()}</p>
        </div>
    );
}