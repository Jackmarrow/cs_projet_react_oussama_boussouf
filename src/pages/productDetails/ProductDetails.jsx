import { useParams } from 'react-router-dom';
import './ProductDetails.scss';
import { Context } from '../../App';
import { useContext, useState } from 'react';

export const ProductDetails = () => {

    const {tabProduct: products, addProduct} = useContext(Context);
    const {id} = useParams();
    const [productAmount, setProductAmount] = useState(1);
    const currentProduct = products.find(element => element.name == id);

    const increment = () => {
        setProductAmount(preValue => preValue + 1);
      };
    
      const decrement = () => {
        if (productAmount != 1) {
          setProductAmount(preValue => preValue - 1);
        }
      };

      const sendToCart = (product)=>{
        const updatedProduct = {...product, amount: productAmount};
        console.log(updatedProduct);
        addProduct(updatedProduct);
      }

    return (
        <section className='add-cart-section mt-8 py-5 d-flex justify-content-center align-items-center'>
                <div className='product-info d-flex flex-column flex-md-row justify-content-md-between gap-2'>
                    <img className='product-picture object-fit-cover' src={currentProduct.imageSrc} alt="" />
                    <div className='product-description'>
                            <h3> <strong>{currentProduct.name}</strong></h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo aliquid itaque, voluptate repellendus incidunt libero ullam neque tempora dolore at id, rerum doloremque voluptatibus maiores deserunt doloribus nobis, voluptatem ratione.</p>
                            <p className='price fs-5'> <strong>Price :</strong> $
                            {
                                currentProduct.state == 'Sale' ? 
                                <>
                                <del className="me-11">{currentProduct.price}</del> <span className="text-danger">${currentProduct.price- (currentProduct.price * 0.2)}</span> 
                                </>
                                : <span>{currentProduct.price}</span>

                            }</p>
                            {
                                currentProduct.name.includes('Shirt') === true ? 
                                <div className='mb-1'>
                                    <p className='fs-5 d-inline'> <strong>Size :</strong> </p>
                                    <select name="size">
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </select>
                                </div>
                            : null
                            }
                            <div className='d-flex mb-1 align-items-center'>
                                <p className='mb-0 fs-5'><strong>Quantity :</strong></p>
                                <div className='product-quantity d-flex align-items-center ms-1'>
                                    <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={decrement}>-</button>
                                    <input disabled value={productAmount} className="items-number h-100 border-0" type="number" />
                                    <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={increment}>+</button>
                                </div>
                            </div>
                            <button onClick={()=> sendToCart(currentProduct)} className="btn text-white bg-black px-2 py-12 rounded-pill">Add to cart</button>
                    </div>
                </div>
        </section>
    );
};

