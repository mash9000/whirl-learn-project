import '../styles/book-a-demo/book-a-demo.scss';
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

type BookADemoProps = {
    bookADemo: IBookADemoButton
}

export const BookADemo = ({bookADemo}: BookADemoProps) => {
    return (
        <button className='book-a-demo'>{bookADemo.getString()}</button>
    )
}