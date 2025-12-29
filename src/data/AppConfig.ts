import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import type {ISignIn} from "../model/interfaces/ISignIn.ts";

export class AppConfig {
    public static readonly NAVBAR_POINTS: IPointOfNavbar[] = [
        {
            getTitle: () => 'Features',
            getLink: () => new URL('http://localhost:8080')
        },
        {
            getTitle: () => 'Pricing',
            getLink: () => new URL('http://localhost:8080')
        },
        {
            getTitle: () => 'Integrations',
            getLink: () => new URL('http://localhost:8080')
        },
        {
            getTitle: () => 'Learn',
            getLink: () => new URL('http://localhost:8080')
        }
    ];
    public static readonly SIGN_IN_PROPERTIES: ISignIn = {
        getString: () => 'Sign In',
        getLink: () => new URL('http://localhost:8080')
    };
}