import type {IPointOfNavbar} from "../model/interfaces/IPointOfNavbar.ts";
import type {IHighLink} from "../model/interfaces/IHighLink.ts";
import type {IBookADemoButton} from "../model/interfaces/IBookADemoButton.ts";
import type {IWrapper} from "../model/interfaces/IWrapper.ts";
import type {ITrustedCompanies} from "../model/interfaces/ITrustedCompanies.ts";
import type {IFactCard} from "../model/interfaces/IFactCard.ts";
import type {IAccordionItem} from "../model/interfaces/IAccordionItem.ts";
import type {IWrapper2} from "../model/interfaces/IWrapper2.ts";
import type {
    IBuildAndPoweredData
} from "../model/interfaces/footer/IBuildAndPoweredData.ts";
import type {IInfoBoxData} from "../model/interfaces/footer/IInfoBoxData.ts";
import type {
    INewsletterData
} from "../model/interfaces/footer/INewsletterData.ts";
import type {
    ISocialNetwork
} from "../model/interfaces/footer/ISocialNetwork.ts";

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

    public static readonly TRUSTED_COMPANIES: ITrustedCompanies = {
        getHeading: () => 'Trusted by 50,000+ companies',
        getNamesOfImages: () => ['carded', 'focusfox', 'nowintech', 'optimer']
    }

    public static readonly FACT_CARDS: IFactCard[] = [
        {
            getNameOfImage: () => 'thunderbolt',
            getTitle: () => 'Fast. Really fast.',
            getParagraph: () => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            getBgColor: () => ({getColor: () => '#FAEA73'})
        },
        {
            getNameOfImage: () => 'money',
            getTitle: () => 'More bang for buck.',
            getParagraph: () => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            getBgColor: () => ({getColor: () => '#CCEFF6'})
        },
        {
            getNameOfImage: () => 'ok-gesture',
            getTitle: () => 'Safe and secure.',
            getParagraph: () => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            getBgColor: () => ({getColor: () => '#F7CEDC'})
        }
    ];

    public static readonly BLOCK_OF_PROMISES: IAccordionItem[] = [
        {
            getImageName: () => 'pin',
            getHeading: () => 'Anti-loss technology',
            getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            getImageName: () => 'smile',
            getHeading: () => 'Exchange easily',
            getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            getImageName: () => 'thunderbolt',
            getHeading: () => 'Plenty of options',
            getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            getImageName: () => 'post',
            getHeading: () => 'Fully encrypted',
            getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]

    public static readonly ABOUT_BLOCK: IFactCard[] = [
        {
            getNameOfImage: () => 'none',

            getTitle: () => 'All on one place.',

            getParagraph: () => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            getBgColor: () => ({getColor: () => 'transparent'})
        },
        {
            getNameOfImage: () => 'lens',

            getTitle: () => 'Get daily alerts.',

            getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',

            getBgColor: () => ({getColor: () => 'transparent'})
        },
        {
            getNameOfImage: () => 'screen',

            getTitle: () => 'Safe and secure.',

            getParagraph: () => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            getBgColor: () => ({getColor: () => 'transparent'})
        },
    ]

    public static readonly WRAPPER_2_DATA: IWrapper2 = {
        getBgName: () => 'light-bulb',
        getHeading: () => 'Set, forget, and then track.',
        getParagraph: () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        getList: () => [
            'Understand your options',
            'No lock-ins',
            'You own the shares'
        ]
    }

    public static readonly FOOTER_DATA: {
        buildAndPoweredData: IBuildAndPoweredData,
        infoBoxData: IInfoBoxData,
        adminData: IInfoBoxData,
        newsletterData: INewsletterData,
        illustrator: { getName(): string, getLink(): URL },
        socialNetworkData: ISocialNetwork[]
    } = {
        buildAndPoweredData: {
            getBuilt: () => ({
                name: 'Nikolai Bain',
                link: new URL('http://localhost:8080')
            }),
            getPower: () => ({
                title: 'Webflow',
                link: new URL('http://localhost:8080')
            })
        },
        infoBoxData: {
            getHeading: () => 'Info',
            getItems: () => [
                {
                    title: 'Features',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Pricing',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Blog',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Support',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Terms & Conditions',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Privacy Policy',
                    link: new URL('http://localhost:8080')
                }
            ]
        },
        adminData: {
            getHeading: () => 'Admin',
            getItems: () => [
                {
                    title: 'Style Guide',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Licenses',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Instructions',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Changelog',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: 'Password',
                    link: new URL('http://localhost:8080')
                },
                {
                    title: '404',
                    link: new URL('http://localhost:8080')
                },
            ]
        },
        newsletterData: {
            getHeading: () => 'Newsletter',
            getParagraph: () => 'Sign up for the latest news, company insights, and Whirl updates.',
            getInputProperties: () => ({
                type: 'email',
                placeholder: 'Enter your email'
            })
        },
        illustrator: {
            getName: () => 'Streamline',
            getLink: () => new URL('http://localhost:8080')
        },
        socialNetworkData: [
            {
                getImageName: () => 'x',
                getLink: () => new URL('http://localhost:8080')
            },
            {
                getImageName: () => 'linkedin',
                getLink: () => new URL('http://localhost:8080')
            },
            {
                getImageName: () => 'facebook',
                getLink: () => new URL('http://localhost:8080')
            },
        ]
    }
}