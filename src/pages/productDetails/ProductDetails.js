import { useParams } from 'react-router-dom';
import './ProductDetails.scss';
import { Context } from '../../App';
import { useContext, useState } from 'react';

export const ProductDetails = () => {

    const {id} = useParams();
    const products = useContext(Context);
    const [productAmount, setProductAmount] = useState(1);
    const currentProduct = products.tabProduct.find(element => element.name == id);

    const increment = () => {
        setProductAmount(preValue => preValue + 1);
      };
    
      const decrement = () => {
        if (productAmount != 1) {
          setProductAmount(preValue => preValue - 1);
        }
      };

      const addProduct = () =>{
            const newList = [...products.productInBasket];
            newList.push(currentProduct);
            products.setProductInBasket(newList);
      }

      const changeColor = (event)=>{
        const colors = document.querySelectorAll('.color');
        colors.forEach(element => {
            if(element.classList.contains('selected')){
                element.classList.remove('selected');
            }
        })
        event.target.classList.add('selected');
      }

    return (
        <section className='add-cart-section mt-8 py-5 d-flex justify-content-center align-items-center'>
                <div className='product-info d-flex flex-column flex-lg-row w-75 gap-2'>
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
                            <div className='mb-1'>
                                <p className='fs-5'><strong>Colors </strong></p>
                                <div className='d-flex gap-1'>
                                    <div onClick={changeColor} className='color bg-light-orange selected'>
                                    </div>
                                    <div onClick={changeColor} className='color bg-light-blue'>
                                    </div>
                                    <div onClick={changeColor} className='color bg-light-gray'>
                                    </div>
                                    <div onClick={changeColor} className='color bg-info'>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-1'>
                                <p className='fs-5 d-inline'> <strong>Size :</strong> </p>
                                <select name="size">
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div className='d-flex mb-1 align-items-center'>
                                <p className='mb-0 fs-5'><strong>Quantity :</strong></p>
                                <div className='product-quantity d-flex align-items-center ms-1'>
                                    <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={decrement}>-</button>
                                    <input value={productAmount} className="items-number h-100 border-0" type="number" />
                                    <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={increment}>+</button>
                                </div>
                            </div>
                            <button onClick={addProduct} className="btn text-white bg-black px-2 py-12 rounded-pill">Add to cart</button>
                    </div>
                </div>
        </section>
    );
};

