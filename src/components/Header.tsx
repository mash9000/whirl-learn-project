import '../styles/header/header.scss';
import '../styles/logo/logo.scss';
import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import {SingIn} from "./SignIn.tsx";
import {BookADemo} from "./BookADemo.tsx";

type HeaderProps = {
    points: IPointOfNavbar[];
}

export const Header = ({points}: HeaderProps) => {
    return (
        <header className='header'>
            <img alt='logo'
                 className='logo'
                 src='../../public/images/logo.svg'/>
            <nav>
                {points.map((point: IPointOfNavbar) => <a key={point.getTitle()}
                                                          href={point.getLink().href}>{point.getTitle()}</a>)}
            </nav>
            <SingIn/>
            <BookADemo/>
        </header>
    );
}