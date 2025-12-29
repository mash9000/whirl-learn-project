import '../styles/header/header.scss';
import '../styles/header/header__navbar.scss';
import '../styles/header/header__navbar__link.scss';
import '../styles/header/header__navbar__link--hover.scss';
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
            <div>
                <img alt='logo'
                     className='logo'
                     src='../../public/images/logo.svg'/>
                <nav className='header__navbar'>
                    {points.map((point: IPointOfNavbar) => <a key={point.getTitle()}
                                                              href={point.getLink().href}
                                                              className='header__navbar__link header__navbar__link--hover'>{point.getTitle()}</a>)}
                </nav>
                <div>
                    <SingIn signInUrl={signIn}/>
                    <BookADemo bookADemo={bookADemo}/>
                </div>
            </div>
        </header>
    );
}