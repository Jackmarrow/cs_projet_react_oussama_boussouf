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

      for (let i = 0; i < cart.length; i++) {
        const currentItem = cart[i];
        if(currentItem.name === action.product.name && action.product.amount !== 1) {
          const newCart = [...cart];
          newCart[i] = {...newCart[i], amount: action.product.amount};
          itExist = true;
          return newCart;
        } 
        else if(currentItem.name === action.product.name && action.product.amount == 1){
          const newCart = [...cart];
          newCart[i] = {...newCart[i], amount: 1};
          itExist = true;
          return newCart;
        }
      }

      if(!itExist) {
        return [...cart, action.product];
      }
    }

    case "deleteProduct":{
      return cart.filter(ele => ele.id !== action.id);
    }
    
    default:
      return "Unknown method";
    }
  }
  