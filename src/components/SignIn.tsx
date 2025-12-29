import '../styles/sign-in/sign-in.scss.scss';
import type {ISignInLink} from "../model/interfaces/ISignInLink.ts";

type SignInProps = {
    signInUrl: ISignInLink;
}

export const SingIn = ({signInUrl}: SignInProps) => {
    return (
        <a className='sign-in'
           href={signInUrl.getLink().href}>{signInUrl.getString()}</a>
    );
}