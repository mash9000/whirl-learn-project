import '../styles/block-of-promises/__accordion/block-of-promises__accordion.scss';
import type {IAccordionItem} from "../model/interfaces/IAccordionItem.ts";
import {AccordionItem} from "./AccordionItem.tsx";

type BlockOfPromisesProps = {
    accordionItems: IAccordionItem[]
}

export const BlockOfPromises = ({accordionItems}: BlockOfPromisesProps) => {
    return (
        <div className='block-of-promises__cover'>
            <div className='block-of-promises'>
                <h3 className='block-of-promise__heading'>We will take care of
                    everything, so you can get back to relaxing.</h3>
                <div className='block-of-promises__accordion'>
                    {
                        accordionItems.map((item: IAccordionItem) =>
                            <AccordionItem key={item.getHeading()} accordionItem={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}