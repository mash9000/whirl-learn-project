import '../styles/trusted-company/trusted-company.scss';
import '../styles/trusted-company/__h/trusted-company__h.scss';
import '../styles/trusted-company/__companies/trusted-company__companies.scss';
import '../styles/trusted-company/__companies/__imgs/trusted-company__companies__imgs.scss';

export const TrustedCompany = () => {
    return (
        <div className='trusted-company'>
            <h6 className='trusted-company__h'>Trusted by 50,000+ companies</h6>
            <div className='trusted-company__companies'>
                <img alt='carded company logo'
                     src='../../public/images/trusted-company/carded.svg'
                     className='trusted-company__companies__imgs'/>
                <img alt='focusfox company logo'
                     src='../../public/images/trusted-company/focusfox.svg'
                     className='trusted-company__companies__imgs'/>
                <img alt='nowintech company logo'
                     src='../../public/images/trusted-company/nowintech.svg'
                     className='trusted-company__companies__imgs'/>
                <img alt='optimer company logo'
                     src='../../public/images/trusted-company/optimer.svg'
                     className='trusted-company__companies__imgs'/>
            </div>
        </div>
    );
}