import '../styles/footer/footer.scss';
import '../styles/footer/__inner-box/footer__inner-box.scss';
import '../styles/footer/__newsletter/footer__newsletter.scss';
import '../styles/footer/__admin/footer__admin.scss';
import '../styles/footer/__infobox/footer__infobox.scss';
import '../styles/footer/__address/footer__address.scss';
import '../styles/footer/__logo-and-info/footer__logo-and-info.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__inner-box'>
                <div className='footer__logo-and-info'>
                    <img
                        alt='logo'
                        src='../../../../../public/images/logo.svg'
                        className='footer__logo-and-info__img'/>
                    <p className='footer__logo-and-info__p'>Built by <a href='#' target='_blank'>Nikolai Bain</a>.</p>
                    <p className='footer__logo-and-info__p'>Powered by <a href='#' target='_blank'>Webflow</a>.</p>
                </div>
                <div className='footer__infobox'>
                    <h3 className='footer__infobox__heading'>Info</h3>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Features</a>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Pricing</a>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Blog</a>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Support</a>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Terms & Conditions</a>
                    <a href='#' target='_blank'
                       className='footer__infobox__link'>Privacy Policy</a>
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
                    <p className='footer__address__rights'>© 2022 Whirl. All Rights Reserved. Illustrations by <a href='#' target='_blank'>Streamline</a></p>
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