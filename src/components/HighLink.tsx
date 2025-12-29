import '../styles/high-link/high-link.scss';
import '../styles/high-link/high-link--hover.scss';
import type {IHighLink} from "../model/interfaces/IHighLink.ts";

type SignInProps = {
    signInUrl: IHighLink;
}

export const HighLink = ({signInUrl}: SignInProps) => {
    return (
        <a className='high-link high-link--hover'
           href={signInUrl.getLink().href}>{signInUrl.getString()}</a>
    );
}