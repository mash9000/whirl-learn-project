import '../styles/header/header.scss';
import '../styles/logo/logo.scss';
import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import {SingIn} from "./SignIn.tsx";
import {BookADemo} from "./BookADemo.tsx";
import type {ISignInLink} from "../model/interfaces/ISignInLink.ts";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

type HeaderProps = {
    points: IPointOfNavbar[],
    signIn: ISignInLink,
    bookADemo: IBookADemoButton
}

export const Header = ({points, signIn, bookADemo}: HeaderProps) => {
    return (
        <header className='header'>
            <img alt='logo'
                 className='logo'
                 src='../../public/images/logo.svg'/>
            <nav>
                {points.map((point: IPointOfNavbar) => <a key={point.getTitle()}
                                                          href={point.getLink().href}>{point.getTitle()}</a>)}
            </nav>
            <SingIn signInUrl={signIn}/>
            <BookADemo bookADemo={bookADemo}/>
        </header>
    );
}