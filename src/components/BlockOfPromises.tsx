import '../styles/block-of-promises/block-of-promises.scss';
import '../styles/block-of-promises/__accordion/block-of-promises__accordion.scss';
import '../styles/block-of-promises/__accordion/__item/block-of-promises__accordion__item.scss';
import '../styles/block-of-promises/__accordion/__item/__img/block-of-promises__accordion__item__img.scss';
import '../styles/block-of-promises/__accordion/__item/__heading/block-of-promises__accordion__item__heading.scss';
import '../styles/block-of-promises/__accordion/__item/__checkbox/block-of-promises__accordion__item__checkbox.scss';
import '../styles/block-of-promises/__accordion/__item/__p/block-of-promises__accordion__item__p.scss';
import '../styles/block-of-promises/__cover/block-of-promises__cover.scss';

export const BlockOfPromises = () => {
    return (
        <div className='block-of-promises__cover'>
            <div className='block-of-promises'>
                <h3 className='block-of-promise__heading'>We will take care of
                    everything, so you can get back to relaxing.</h3>
                <div className='block-of-promises__accordion'>
                    <div className='block-of-promises__accordion__item'>
                        <img alt='post image'
                             src='../../public/images/accordion-items/post.svg'
                             className='block-of-promises__accordion__item__img'/>
                        <h6 className='block-of-promises__accordion__item__heading'>Fully
                            encrypted</h6>
                        <input
                            className='block-of-promises__accordion__item__checkbox'
                            type='checkbox'/>
                        <p className='block-of-promises__accordion__item__p'>Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</p>
                    </div>
                    <div className='block-of-promises__accordion__item'>
                        <img alt='post image'
                             src='../../public/images/accordion-items/post.svg'
                             className='block-of-promises__accordion__item__img'/>
                        <h6 className='block-of-promises__accordion__item__heading'>Fully
                            encrypted</h6>
                        <input
                            className='block-of-promises__accordion__item__checkbox'
                            type='checkbox'/>
                        <p className='block-of-promises__accordion__item__p'>Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}