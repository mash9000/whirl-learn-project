import '../styles/header/header.scss';
import '../styles/logo/logo.scss';
import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import {SingIn} from "./SignIn.tsx";
import {BookADemo} from "./BookADemo.tsx";
import type {ISignIn} from "../model/interfaces/ISignIn.ts";

type HeaderProps = {
    points: IPointOfNavbar[],
    signIn: ISignIn,
}

export const Header = ({points, signIn}: HeaderProps) => {
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
            <BookADemo/>
        </header>
    );
}