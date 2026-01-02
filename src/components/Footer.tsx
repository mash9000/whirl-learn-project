import '../styles/footer/footer.scss';
import '../styles/footer/__inner-box/footer__inner-box.scss';
import '../styles/footer/__newsletter/footer__newsletter.scss';
import '../styles/footer/__admin/footer__admin.scss';
import '../styles/footer/__infobox/footer__infobox.scss';
import '../styles/footer/__address/footer__address.scss';
import '../styles/footer/__logo-and-info/footer__logo-and-info.scss';
import type {
    IBuildAndPoweredData
} from "../model/interfaces/footer/IBuildAndPoweredData.ts";
import type {IInfoBoxData} from "../model/interfaces/footer/IInfoBoxData.ts";

type FooterProps = {
    buildAndPoweredData: IBuildAndPoweredData,
    infoBoxData: IInfoBoxData
}

export const Footer = ({buildAndPoweredData, infoBoxData}: FooterProps) => {
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
                    }) => <a key={item.title} href={item.link.href}
                             target='_blank'>{item.title}</a>)}
                </div>
                <div className='footer__admin'>
                    <h3 className='footer__admin__heading'>Admin</h3>
                    <a href='#' target='_blank' className='footer__admin__link'>Style
                        Guide</a>
                    <a href='#' target='_blank'
                       className='footer__admin__link'>Licenses</a>
                    <a href='#' target='_blank'
                       className='footer__admin__link'>Instructions</a>
                    <a href='#' target='_blank'
                       className='footer__admin__link'>Changelog</a>
                    <a href='#' target='_blank'
                       className='footer__admin__link'>Password</a>
                    <a href='#' target='_blank'
                       className='footer__admin__link'>404</a>
                </div>
                <div className='footer__newsletter'>
                    <h3 className='footer__newsletter__heading'>Newsletter</h3>
                    <p className='footer__newsletter__paragraph'>Sign up for the
                        latest news, company insights, and Whirl updates.</p>
                    <input
                        type='email'
                        placeholder='Your email address'
                        className='footer__newsletter__input'/>
                </div>
                <address className='footer__address'>
                    <p className='footer__address__rights'>© 2022 Whirl. All
                        Rights Reserved. Illustrations by <a href='#'
                                                             target='_blank'>Streamline</a>
                    </p>
                    <div className='footer__address__social-networks'>
                        <a href='#' target='_blank' style={{}}></a>
                        <a href='#' target='_blank' style={{}}></a>
                        <a href='#' target='_blank' style={{}}></a>
                    </div>
                </address>
            </div>
        </footer>
    );
}