import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import type {IHighLink} from "../model/interfaces/IHighLink.ts";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";
import type {IWrapper} from "../model/interfaces/IWrapper.ts";
import type {ITrustedCompanies} from "../model/interfaces/ITrustedCompanies.ts";

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
    public static readonly SIGN_IN_LINK_PROPERTIES: IHighLink = {
        getString: () => 'Sign In',
        getLink: () => new URL('http://localhost:8080')
    };
    public static readonly BOOK_A_DEMO_BUTTON_PROPERTIES: IBookADemoButton = {
        getString: () => 'Book a demo',
        getLink: () => new URL('http://localhost:8080')
    };

    public static readonly WRAPPER_DATA: IWrapper = {
        getHeading: () => 'Your everyday tasks, automated.',
        getDescription: () => 'Whirl lets you design and streamline your\n' +
            '                everyday tasks and workflows in just a few clicks.',
        getLearnMoreLinkData: () => ({
            getString: () => 'Learn more >',
            getLink: () => new URL('http://localhost:8080')
        })
    };

    public static readonly LEARN_MORE_LINK_PROPERTIES: IHighLink = {
        getString: () => 'Learn more >',
        getLink: () => new URL('http://localhost:8080')
    };

    public static readonly TRUSTED_COMPANIES: ITrustedCompanies = {
        getHeading: () => 'Trusted by 50,000+ companies',
        getNamesOfImages: () => ['carded', 'focusfox', 'nowintech', 'optimer']
    }
}