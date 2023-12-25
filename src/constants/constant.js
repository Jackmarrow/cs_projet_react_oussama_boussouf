// IMPORT IMAGES
import basket from '../assets/images/clothes-image/black-basket.jpg';
import blackGlasses from '../assets/images/clothes-image/black-glasses.jpg';
import watch from '../assets/images/clothes-image/black-watch.jpg';
import shirt from '../assets/images/clothes-image/shirt.jpg';
import blackShirt from '../assets/images/clothes-image/black-shirt.jpg';
import whiteBasket from '../assets/images/clothes-image/white-basket.jpg';
import classShirt from '../assets/images/clothes-image/class-shirt.jpg';
import brownWatch from '../assets/images/clothes-image/brown-watch.jpg';
import whiteShirt from '../assets/images/clothes-image/white-shirt.jpg';
import womenJean from '../assets/images/clothes-image/women-jean.jpg';
import softPant from '../assets/images/clothes-image/male-pant.jpg';
import pinkPant from '../assets/images/clothes-image/pink-pant.jpg';
import shirtBack from '../assets/images/clothes-image/bg-shirt.jpg';
import jeanJacket from '../assets/images/clothes-image/jean-jacket.jpg';
import blueJeanPant from '../assets/images/clothes-image/blue-jean.jpg';
import leaderJacket from '../assets/images/clothes-image/leader-jacket.jpg';


class Item {
    constructor(name, price, imageSrc, type, state, amount) {
      this.name = name;
      this.price = price;
      this.imageSrc = imageSrc;
      this.type = type;
      this.state = state;
      this.amount = amount;
    }
  }

  const glass = new Item('Black Glasses', 23, blackGlasses, 'accessoire', 'New', 1);
  const blackBasket = new Item('Black Basket', 23, basket, 'men', 'Old', 1);
  const hand_watch = new Item('Watch', 23, watch, 'accessoire', 'Sale', 1);
  const jean_shirt = new Item('Jean Shirt', 21.95, shirt, 'women', 'Sale', 1);
  const black_shirt = new Item('Soft Balck Shirt', 23, blackShirt, 'men', 'New', 1);
  const white_basket = new Item('White Basket', 23, whiteBasket, 'women', 'New', 1);
  const class_shirt = new Item('Class Shirt', 23, classShirt, 'men', 'Sale', 1);
  const brown_watch = new Item('Brown Watch', 23, brownWatch, 'accessoire', 'Old', 1);
  const white_shirt = new Item('Soft White Shirt', 23, whiteShirt, 'men', 'New', 1);
  const women_jean = new Item('Jean Pant', 23, womenJean, 'women', 'Old', 1);
  const soft_pant = new Item('Soft Pant', 23, softPant, 'men', 'Sale', 1);
  const pink_pant = new Item('Soft Pink Pant', 23, pinkPant, 'women', null, 1);
  const shirt_back = new Item('White Shirt', 23, shirtBack, 'men', null, 1);
  const jean_jacket = new Item('Jean Jacket', 23, jeanJacket, 'men', null, 1);
  const blue_pant = new Item('Blue Jean', 23, blueJeanPant, 'women', null, 1);
  const leader_jacket = new Item('Leader Jacket', 23, leaderJacket, 'men', 'Old', 1);

 export const tabProduct = [
    glass,
    blackBasket,
    hand_watch,
    jean_shirt,
    black_shirt,
    white_basket,
    class_shirt,
    brown_watch,
    white_shirt,
    women_jean,
    soft_pant,
    pink_pant,
    shirt_back,
    jean_jacket,
    blue_pant,
    leader_jacket
];