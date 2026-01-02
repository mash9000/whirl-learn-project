import '../styles/wrapper-2/wrapper-2.scss';
import '../styles/wrapper-2/__list/wrapper-2__list.scss';
import '../styles/wrapper-2/__box/wrapper-2__box.scss';
import '../styles/wrapper-2/__heading/wrapper-2__heading.scss';
import '../styles/wrapper-2/__p/wrapper-2__p.scss';
import '../styles/wrapper-2/__subbox/wrapper-2__subbox.scss';
import type {IWrapper2} from "../model/interfaces/IWrapper2.ts";
import {BookADemo} from "./BookADemo.tsx";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

type Wrapper2Props = {
    data: IWrapper2,
    bookADemo: IBookADemoButton
}

export const Wrapper2 = ({data, bookADemo}: Wrapper2Props) => {
    return (
        <div className='wrapper-2'>
            <div className='wrapper-2__subbox'>
                <img alt={`${data.getBgName()}`}
                     src='/images/wrappers/light-bulb.svg'/>
                <div className='wrapper-2__box'>
                    <h3 className='wrapper-2__heading'>{data.getHeading()}</h3>
                    <p className='wrapper-2__p'>{data.getParagraph()}</p>
                    <ul>
                        {data.getList().map((item: string) =>
                            <li
                                key={item}
                            className='wrapper-2__list'>{item}</li>)}
                    </ul>
                    <BookADemo bookADemo={bookADemo}/>
                </div>
            </div>
        </div>
    );
}