import "./Panier.scss";
import shirt from '../../assets/images/black-shirt.jpg';

export const Panier = () => {
  return (
    <section className="panier-section mt-8">
      <div className="distorted-background d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-white fw-bold">PANIER</h2>
      </div>
      <div className="py-6 d-flex justify-content-center">
      <table className="product-table">
        <thead>
          <tr className="pb-2">
            <td className="w-25"></td>
            <td className="fw-bold pb-1">PRODUCT</td>
            <td className="fw-bold pb-1">PRICE</td>
            <td className="fw-bold pb-1">QUANTITY</td>
            <td className="fw-bold pb-1">TOTAL</td>
          </tr>
        </thead>
        <tbody className="product-details border-1">
            <tr className="border-bottom">
                <td className="px-2 py-2">
                    <img src={shirt} alt="" />
                </td>
                <td>
                    Shirt
                </td>
                <td>
                    $19.00
                </td>
                <td>
                    amount1
                </td>
                <td>
                    $19.00
                </td>
            </tr>
            <tr className="border-bottom">
                <td className="p-2">
                    <img src={shirt} alt="" />
                </td>
                <td>
                    Shirt
                </td>
                <td>
                    $19.00
                </td>
                <td>
                    amount1
                </td>
                <td>
                    $19.00
                </td>
            </tr>
            <button className="btn bg-black text-white m-2 px-2 rounded-pill">PROCED TO PAYMENT</button>
        </tbody>
      <tr>
      </tr>
      </table>
      </div>
    </section>
  );
};
