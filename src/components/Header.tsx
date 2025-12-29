import '../styles/header/header.scss';
import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";

type HeaderProps = {
    points: IPointOfNavbar[];
}

export const Header = ({points}: HeaderProps) => {
    return (
        <header className='header'>
            <nav>
                {points.map((point: IPointOfNavbar) => <a key={point.getTitle()}
                                                          href={point.getLink().href}>{point.getTitle()}</a>)}
            </nav>
        </header>
    );
}