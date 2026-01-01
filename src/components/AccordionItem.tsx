import '../styles/block-of-promises/__accordion/__item/block-of-promises__accordion__item.scss';
import '../styles/block-of-promises/__accordion/__item/__img/block-of-promises__accordion__item__img.scss';
import '../styles/block-of-promises/__accordion/__item/__heading/block-of-promises__accordion__item__heading.scss';
import '../styles/block-of-promises/__accordion/__item/__checkbox/block-of-promises__accordion__item__checkbox.scss';
import '../styles/block-of-promises/__accordion/__item/__p/block-of-promises__accordion__item__p.scss';
import type {IAccordionItem} from "../model/interfaces/IAccordionItem.ts";

type AccordionItemProps = {
    accordionItem: IAccordionItem;
}

export const AccordionItem = ({accordionItem}: AccordionItemProps) => {
    const letItGoToTheFolderWithImagesForTheAccordion: string = '../../public/images/accordion-items/';
    return (
        <div className='block-of-promises__accordion__item'>
            <img alt={`{accordionItem.getImageName()}`}
                 src={`${letItGoToTheFolderWithImagesForTheAccordion}${accordionItem.getImageName()}.svg`}
                 className='block-of-promises__accordion__item__img'/>
            <h6 className='block-of-promises__accordion__item__heading'>{accordionItem.getHeading()}</h6>
            <input
                className='block-of-promises__accordion__item__checkbox'
                type='checkbox'/>
            <p className='block-of-promises__accordion__item__p'>{accordionItem.getParagraph()}</p>
        </div>
    );
}