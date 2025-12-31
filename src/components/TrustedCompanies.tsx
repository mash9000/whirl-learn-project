import '../styles/trusted-company/trusted-company.scss';
import '../styles/trusted-company/__h/trusted-company__h.scss';
import '../styles/trusted-company/__companies/trusted-company__companies.scss';
import '../styles/trusted-company/__companies/__imgs/trusted-company__companies__imgs.scss';
import type {ITrustedCompanies} from "../model/interfaces/ITrustedCompanies.ts";

type TrustedCompaniesProps = {
    data: ITrustedCompanies;
}

export const TrustedCompanies = ({data}: TrustedCompaniesProps) => {
    const pathToTheFolderWithLogosOfTrustedCompanies: string = '../../public/images/trusted-company/';
    return (
        <div className='trusted-company'>
            <h6 className='trusted-company__h'>{data.getHeading()}</h6>
            <div className='trusted-company__companies'>
                {data.getNamesOfImages().map((item: string) => {
                    return <img
                        src={`${pathToTheFolderWithLogosOfTrustedCompanies}${item}.svg`}
                        className='trusted-company__companies__imgs'
                        alt={`${item} company logo`}/>
                })}
            </div>
        </div>
    );
}