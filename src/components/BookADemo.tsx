import '../styles/book-a-demo/book-a-demo.scss';
import '../styles/book-a-demo/book-a-demo--hover.scss';
import '../styles/book-a-demo/book-a-demo--active.scss';
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

type BookADemoProps = {
    bookADemo: IBookADemoButton
}

export const BookADemo = ({bookADemo}: BookADemoProps) => {
    return (
        <button className='book-a-demo book-a-demo--hover book-a-demo--active'>{bookADemo.getString()}</button>
    )
}