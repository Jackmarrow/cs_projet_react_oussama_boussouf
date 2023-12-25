import './ComingProduct.scss';
//IMPORT IMAGES
import glasses from '../../../../assets/images/clothes-image/glasses.jpg';
import watch from '../../../../assets/images/clothes-image/watch.jpg';
import bag from '../../../../assets/images/clothes-image/bag.jpg';


export const ComingProduct = () => {

    const images = [glasses, watch, bag];

    return (
        <section className='coming-product'>
           <div className='px-1 d-flex flex-column align-items-center flex-md-row justify-content-center py-2 gap-2'>
           {
                images.map((element)=>
                    <div className='position-relative'>
                        <img className='product-image w-100' src={element} alt="product" />
                        <button className='btn btn-secondary position-absolute shadow bottom-0 start-50 translate-middle px-2 py-13 border-0'> COMING SOON</button>
                    </div>
                )
            }
           </div>
        </section>
    );
};
