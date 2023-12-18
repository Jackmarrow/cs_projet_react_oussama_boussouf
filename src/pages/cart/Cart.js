
import { Context } from "../../App";
import "./Cart.scss";

export const Cart = ({cart}) => {

  return (
    <section className="cart-section pt-8">
      <div className="distorted-background d-flex justify-content-center align-items-center">
        <h2 className="text-white fw-bold">CART</h2>
      </div>
     {cart.length !== 0 ?  <table valign="center" className="table container my-5 align-middle">
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
                cart.map(ele => 
                <tr className="text-center border-1">
                    <td className="py-1"><img width={90} height={120} src={ele.imageSrc} alt="product image" style={{objectFit: 'cover'}}/></td>
                    <td className="py-1">{ele.name}</td>
                    <td className="py-1">${ele.price}</td>
                    <td className="py-1">{ele.quantity}</td>
                    <td className="py-1">${ele.price}</td>
                </tr>)
            }
        </tbody>
        <tfoot>
            <tr className="border-1">
                <td className="py-2" colSpan={5}>Sub total</td>
            </tr>
        </tfoot>
      </table>
      : <h2 className="py-5 text-center">Your Basket is Empty</h2>
      }
    </section>
  );
};
