import '../styles/header/header.scss';
import '../styles/header/__navbar/header__navbar.scss';
import '../styles/header/__navbar/__link/header__navbar__link.scss';
import '../styles/header/__navbar/__link/header__navbar__link--hover.scss';
import '../styles/logo/logo.scss';
import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import {HighLink} from "./HighLink.tsx";
import {BookADemo} from "./BookADemo.tsx";
import type {IHighLink} from "../model/interfaces/IHighLink.ts";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

type HeaderProps = {
    points: IPointOfNavbar[],
    signIn: IHighLink,
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
                    <HighLink signInUrl={signIn}/>
                    <BookADemo bookADemo={bookADemo}/>
                </div>
            </div>
        </header>
    );
}