import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import type {ISignInLink} from "../model/interfaces/ISignInLink.ts";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";

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
    public static readonly SIGN_IN_LINK_PROPERTIES: ISignInLink = {
        getString: () => 'Sign In',
        getLink: () => new URL('http://localhost:8080')
    };
    public static readonly BOOK_A_DEMO_BUTTON_PROPERTIES: IBookADemoButton = {
        getString: () => 'Book a demo',
        getLink: () => new URL('http://localhost:8080')
    };
}