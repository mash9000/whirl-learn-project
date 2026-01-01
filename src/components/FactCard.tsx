import '../styles/fact-card/fact-card.scss';
import '../styles/fact-card/__icons/fact-card__icons.scss';
import '../styles/fact-card/__heading/fact-card__heading.scss';
import '../styles/fact-card/__p/fact-card__p.scss';

export const FactCard = () => {
    const pathToTheFolderWithIconsForFacts: string = '../../public/images/card-facts/';
    return (
        <div className="fact-card">
            <img src={`${pathToTheFolderWithIconsForFacts}thunderbolt.svg`}
                 alt="thunderbolt icon"
                 className='fact-card__icons'/>
            <h5 className='fact-card__heading'>Fast. Really fast.</h5>
            <p className='fact-card__p'>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
}