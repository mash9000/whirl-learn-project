import '../styles/sign-in/sign-in.scss.scss';
import type {ISignIn} from "../model/interfaces/ISignIn.ts";

type SignInProps = {
    signInUrl: ISignIn;
}

export const SingIn = ({signInUrl}: SignInProps) => {
    return (
        <a className='sign-in'
           href={signInUrl.getLink().href}>{signInUrl.getString()}</a>
    );
}