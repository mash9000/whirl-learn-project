import '../styles/wrapper-2/wrapper-2.scss';
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
            <h3 className='wrapper-2__heading'>{data.getHeading()}</h3>
            <p className='wrapper-2__p'>{data.getParagraph()}</p>
            <ol>
                {data.getList().map((item: string) => <li
                    key={item}>{item}</li>)}
            </ol>
            <BookADemo bookADemo={bookADemo}/>
        </div>
    );
}