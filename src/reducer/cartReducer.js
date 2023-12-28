export function cartReducer(cart, action) {
  switch (action.type) {
    case "increment": {
      const newCart = [...cart];
      newCart[action.id] = {
        ...newCart[action.id],
        amount: newCart[action.id].amount + 1,
      };
      return newCart;
    }
    case "decrement": {
      const newCart = [...cart];
      if (newCart[action.id].amount === 1) {
        const updatedCart = newCart.filter((ele, i) => i !== action.id && ele);
        return updatedCart;
      }
      newCart[action.id] = {
        ...newCart[action.id],
        amount: newCart[action.id].amount - 1,
      };
      return newCart;
    }
    case "addProduct": {
      let itExist = false;
    //   for (let i = 0; i < cart.length; i++) {
    //     const cartElement = cart[i];
    //     if (cartElement.name === action.product.name) {
    //       ((prevEle) => {
    //         const updatedProduct = [...prevEle];
    //         if (action.product.amount === 1) {
    //           updatedProduct[i] = {
    //             ...updatedProduct[i],
    //             amount: updatedProduct[i].amount + 1,
    //           };
    //         } else {
    //           updatedProduct[i] = {
    //             ...updatedProduct[i],
    //             amount: action.product.amount,
    //           };
    //         }
    //         return updatedProduct;
    //       });

    //       itExist = true;
    //     }
    //   }

      if (!itExist) {
        return [...cart, action.product];
      }
    }
    default:
      return "Unknown method";
  }
}
