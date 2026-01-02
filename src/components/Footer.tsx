import '../styles/footer/footer.scss';
import '../styles/footer/__inner-box/footer__inner-box.scss';
import '../styles/footer/__newsletter/footer__newsletter.scss';
import '../styles/footer/__admin/footer__admin.scss';
import '../styles/footer/__infobox/footer__infobox.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__inner-box'>
                <div className='footer__infobox'>
                    <h3 className='footer__infobox__heading'>Info</h3>
                    <a href='#' target='_blank' className='footer__infobox__link'>Features</a>
                    <a href='#' target='_blank' className='footer__infobox__link'>Pricing</a>
                    <a href='#' target='_blank' className='footer__infobox__link'>Blog</a>
                    <a href='#' target='_blank' className='footer__infobox__link'>Support</a>
                    <a href='#' target='_blank' className='footer__infobox__link'>Terms & Conditions</a>
                    <a href='#' target='_blank' className='footer__infobox__link'>Privacy Policy</a>
                </div>
                <div className='footer__admin'>
                    <h3 className='footer__admin__heading'>Admin</h3>
                    <a href='#' target='_blank' className='footer__admin__link'>Style Guide</a>
                    <a href='#' target='_blank' className='footer__admin__link'>Licenses</a>
                    <a href='#' target='_blank' className='footer__admin__link'>Instructions</a>
                    <a href='#' target='_blank' className='footer__admin__link'>Changelog</a>
                    <a href='#' target='_blank' className='footer__admin__link'>Password</a>
                    <a href='#' target='_blank' className='footer__admin__link'>404</a>
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
            </div>
        </footer>
    );
}