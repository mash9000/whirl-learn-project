import '../styles/fact-card/fact-card.scss';
import '../styles/fact-card/__icons/fact-card__icons.scss';
import '../styles/fact-card/__heading/fact-card__heading.scss';
import '../styles/fact-card/__p/fact-card__p.scss';
import type {IFactCard} from "../model/interfaces/IFactCard.ts";

type FactCardProps = {
    factData: IFactCard,
    pathToTheFolder: string
}

export const FactCard = ({factData, pathToTheFolder}: FactCardProps) => {
    const stylesForTheHeaderWhenThereIsNoImage = {
        marginTop: "90px"
    }
    return (
        <div className="fact-card" style={{
            backgroundColor: factData.getBgColor().getColor()
        }}>
            {(factData.getNameOfImage() !== 'none') &&
                <img
                    src={`${pathToTheFolder}${factData.getNameOfImage()}.svg`}
                    alt={`${factData.getNameOfImage()} icon`}
                    className='fact-card__icons'/>}
            <h5 className='fact-card__heading' style={factData.getNameOfImage() === 'none' ? stylesForTheHeaderWhenThereIsNoImage : {}}>{factData.getTitle()}</h5>
            <p className='fact-card__p'>{factData.getParagraph()}</p>
        </div>
    );
}