import '../styles/footer/footer.scss';
import '../styles/footer/__inner-box/footer__inner-box.scss';
import '../styles/footer/__newsletter/footer__newsletter.scss';

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__inner-box'>
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