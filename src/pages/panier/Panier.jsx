import "./Panier.scss";
// import shirt from '../../assets/images/black-shirt.jpg';
import basketImage from '../../assets/images/empty-basket.svg';
import { useState } from "react";

export const Panier = ({cart, setCart, calcTotalPrice}) => {

  const shippingFee = 15;

  const increment = (index) => {
    setCart((cart) =>{
      const newCart = [...cart];
      newCart[index] = {...newCart[index], amount: newCart[index].amount + 1 };
      return newCart;
     });
  };

  const decrement = (index) => {
    setCart((prevEle) =>{
      const newCart = [...prevEle];
      if(newCart[index].amount === 1){
        const updatedCart = newCart.filter((ele, i) => i !== index && ele);
        return updatedCart;
      }
      newCart[index] = {...newCart[index], amount: newCart[index].amount - 1 };
      return newCart;
     });
  };

  return (
    <section className="cart-section container px-1 px-sm-0 pt-8">
     {cart.length !== 0 ?  
     <>
     <div className="table-container">
     <table valign="center" className="table mt-5 align-middle table-wrapper">
        <thead>
          <tr className="text-center">
            <th></th>
            <th className="pb-1">PRODUCT</th>
            <th className="pb-1">PRICE</th>
            <th className="pb-1">QUANTITY</th>
            <th className="pb-1">TOTAL</th>
          </tr>
        </thead>
        <tbody>
            {
                cart.map((ele, index) => 
                <tr className="text-center border-1">
                    <td className="py-1"><img width={120} height={150} src={ele.imageSrc} alt="product image" style={{objectFit: 'cover'}}/></td>
                    <td className="py-1">{ele.name}</td>
                    <td className="py-1">${ele.price}</td>
                    <td className="py-1">
                      <div className='product-quantity d-flex align-items-center justify-content-center'>
                        <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={() => decrement(index)}>-</button>
                        <input value={ele.amount} className="items-number h-100 border-0" type="number" />
                        <button className='px-13 fs-5 h-100 bg-secondary-gray border-0' onClick={() => increment(index)}>+</button>
                      </div>
                    </td>
                    <td className="py-1">${ele.price * ele.amount}</td>
                </tr>)
            }
        </tbody>
      </table>
     </div>
            <div className="order-summary border border-1 p-1 ms-auto my-3">
              <h3 className="fw-bold fs-4">CART TOTALS</h3>
              <hr />
              <p className="fw-bold">Order summary</p>
              <ul>
                <li className="d-flex justify-content-between mb-1">{cart.length} Items <span className="d-block">${calcTotalPrice()}</span></li>
                <li className="d-flex justify-content-between mb-1">Shipping fee <span className="d-block">${shippingFee}</span></li>
                <li className="d-flex justify-content-between">Total  <span className="d-block">${calcTotalPrice() + shippingFee}</span></li>
              </ul>
              <button  className="btn-cta border-0 rounded-pill bg-black text-white px-1 py-12">PROCEED TO CHECKOUT</button>
          </div>

     </>
      : <div className="py-5 d-flex align-items-center flex-column">
        <img className="mb-1" src={basketImage} width="100" alt="empty basket" />
        <p className="text-center fs-5 mb-0">Your Basket is Empty</p>
      </div>
      }
    </section>
  );
};
