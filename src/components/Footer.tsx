import '../styles/footer/footer.scss';
import '../styles/footer/__inner-box/footer__inner-box.scss';
import '../styles/footer/__newsletter/footer__newsletter.scss';
import '../styles/footer/__admin/footer__admin.scss';
import '../styles/footer/__admin/__link/footer__admin__link.scss';
import '../styles/footer/__infobox/footer__infobox.scss';
import '../styles/footer/__infobox/__link/footer__infobox__link.scss';
import '../styles/footer/__address/footer__address.scss';
import '../styles/footer/__logo-and-info/footer__logo-and-info.scss';
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

type FooterProps = {
    buildAndPoweredData: IBuildAndPoweredData,
    infoBoxData: IInfoBoxData,
    adminData: IInfoBoxData,
    newsletterData: INewsletterData,
    illustrator: { name: string, link: URL },
    socialNetworkData: ISocialNetwork[]
}

export const Footer = ({
                           buildAndPoweredData,
                           infoBoxData,
                           adminData,
                           newsletterData,
                           illustrator,
                           socialNetworkData
                       }: FooterProps) => {
    return (
        <footer className='footer'>
            <div className='footer__inner-box'>
                <div className='footer__logo-and-info'>
                    <img
                        alt='logo'
                        src='../../../../../public/images/logo.svg'
                        className='footer__logo-and-info__img'/>
                    <p className='footer__logo-and-info__p'>Built by <a
                        href={buildAndPoweredData.getBuilt().link.href}
                        target='_blank'>{buildAndPoweredData.getBuilt().name}</a>.
                    </p>
                    <p className='footer__logo-and-info__p'>Powered by <a
                        href={buildAndPoweredData.getPower().link.href}
                        target='_blank'>{buildAndPoweredData.getPower().title}</a>.
                    </p>
                </div>
                <div className='footer__infobox'>
                    <h3 className='footer__infobox__heading'>{infoBoxData.getHeading()}</h3>
                    {infoBoxData.getItems().map((item: {
                        title: string,
                        link: URL
                    }) => <a
                        key={item.title}
                        href={item.link.href}
                        target='_blank'
                        className='footer__infobox__link'>{item.title}</a>)}
                </div>
                <div className='footer__admin'>
                    <h3 className='footer__admin__heading'>{adminData.getHeading()}</h3>
                    {adminData.getItems().map((item: {
                        title: string,
                        link: URL
                    }) => <a
                        key={item.title}
                        href={item.link.href}
                        target='_blank'
                        className='footer__admin__link'>{item.title}</a>)}
                </div>
                <div className='footer__newsletter'>
                    <h3 className='footer__newsletter__heading'>{newsletterData.getHeading()}</h3>
                    <p className='footer__newsletter__paragraph'>{newsletterData.getParagraph()}</p>
                    <input
                        type={newsletterData.getInputProperties().type}
                        placeholder={newsletterData.getInputProperties().placeholder}
                        className='footer__newsletter__input'/>
                </div>
                <address className='footer__address'>
                    <p className='footer__address__rights'>© 2022 Whirl. All
                        Rights Reserved. Illustrations by <a
                            href={illustrator.link.href}
                            target='_blank'>{illustrator.name}</a>
                    </p>
                    <div className='footer__address__social-networks'>
                        {socialNetworkData.map((st: ISocialNetwork) =>
                            <a
                                key={st.getLink().href}
                                href={st.getLink().href}
                                aria-label={st.getImageName()}
                                target='_blank'
                                style={{
                                    backgroundImage: `../../../../../public/images/social-networks/${st.getImageName()}.svg`
                                }}></a>)}
                    </div>
                </address>
            </div>
        </footer>
    );
}