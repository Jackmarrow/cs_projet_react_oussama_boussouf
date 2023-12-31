import './ComingProduct.scss';
//IMPORT IMAGES
import glasses from '../../../../assets/images/clothes-image/glasses.jpg';
import watch from '../../../../assets/images/clothes-image/watch.jpg';
import bag from '../../../../assets/images/clothes-image/bag.jpg';

const images = [glasses, watch, bag];

export const ComingProduct = () => {


    return (
        <section className='coming-product'>
           <div className='px-1 d-flex flex-column align-items-center flex-md-row justify-content-center py-2 gap-2'>
           {
                images.map((element, index)=>
                    <div key={index} className='position-relative'>
                        <img className='product-image w-100' src={element} alt="product" />
                        <div className='coming-soon bg-secondary position-absolute shadow bottom-0 start-50 translate-middle px-2 py-13 border-0 text-white'> COMING SOON</div>
                    </div>
                )
            }
           </div>
        </section>
    );
};
