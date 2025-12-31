import '../styles/trusted-company/trusted-company.scss';
import '../styles/trusted-company/__companies/trusted-company__companies.scss';

export const TrustedCompany = () => {
    return (
        <div className='trusted-company'>
            <h6>Trusted by 50,000+ companies</h6>
            <div className='trusted-company__companies'>
                <img alt='carded company logo'
                     src='../../public/images/trusted-company/carded.svg'/>
                <img alt='focusfox company logo'
                     src='../../public/images/trusted-company/focusfox.svg'/>
                <img alt='nowintech company logo'
                     src='../../public/images/trusted-company/nowintech.svg'/>
                <img alt='optimer company logo'
                     src='../../public/images/trusted-company/optimer.svg'/>
            </div>
        </div>
    );
}