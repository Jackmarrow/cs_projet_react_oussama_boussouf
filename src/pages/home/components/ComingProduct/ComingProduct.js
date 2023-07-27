import './ComingProduct.scss';
//IMPORT IMAGES
import glasses from '../../../../assets/images/glasses.jpg';
import watch from '../../../../assets/images/watch.jpg';
import bag from '../../../../assets/images/bag.jpg';



export const ComingProduct = () => {

    const images = [glasses, watch, bag];

    return (
        <section className='coming-product px-1 d-flex flex-column align-items-center flex-md-row justify-content-center py-2 gap-2'>
            {
                images.map((element)=>
                    <div className='position-relative'>
                        <img className='product-image' src={element} alt="product" />
                        <button className='position-absolute shadow bottom-0 start-50 translate-middle px-2 py-13 border-0'> COMING SOON</button>
                    </div>
                )
            }
        </section>
    );
};
