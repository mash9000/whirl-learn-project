import '../styles/wrapper/wrapper.scss';
import '../styles/wrapper/wrapper__h1.scss';
import '../styles/wrapper/wrapper__p.scss';
import '../styles/wrapper/wrapper__links.scss';
import {BookADemo} from "./BookADemo.tsx";
import {HighLink} from "./HighLink.tsx";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";
import type {IWrapper} from "../model/interfaces/IWrapper.ts";

type WrapperProps = {
    bookADemo: IBookADemoButton;
    wrapperData: IWrapper;
}

export const Wrapper = ({bookADemo, wrapperData}: WrapperProps) => {
    return (
        <div className="wrapper">
            <h1 className='wrapper__h1'>{wrapperData.getHeading()}</h1>
            <p className='wrapper__p'>{wrapperData.getDescription()}</p>
            <div className='wrapper__links'>
                <BookADemo bookADemo={bookADemo}/>
                <HighLink signInUrl={wrapperData.getLearnMoreLinkData()}/>
            </div>
        </div>
    );
}