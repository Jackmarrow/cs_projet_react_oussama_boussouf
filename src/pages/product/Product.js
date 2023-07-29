import { useContext, useEffect, useState } from "react";
import "./Product.scss";
import {BiSearch} from 'react-icons/bi'
import { Context } from "../../App";
import { Item } from "../../layouts/Item";

export const Product = () => {

  const products = useContext(Context);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasChanged, setHasChanged] = useState(false);
   
  const showProducts = (event)=>{
      setInputValue(event.target.value);
      if(inputValue.length == 1 || inputValue.length == 0){
          setFilteredProduct(products);
      }
  }

 const searchForProduct = (event)=>{
        if(event.key === 'Enter'){
            const filter = products.filter((product) => product.name.toLowerCase().includes(inputValue));
            setFilteredProduct(filter);
        }
        else if(event.target.tagName == 'BUTTON'){
            const filter = products.filter((product) => product.name.toLowerCase().includes(inputValue));
            setFilteredProduct(filter);
        }
    }

 const changeCategorie = ()=>{
    setHasChanged(!hasChanged);
 }  

useEffect(()=>{
        setFilteredProduct(products);
    }, [hasChanged])

  return (
    <section className="product-section">
      <div className="distorted-background d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-white fw-bold">PRODUCT</h2>
        <p className="text-white fs-5">New Arrivals Women Collection</p>
      </div>
        <div className="product-container py-3 d-flex justify-content-center">
        <div className="d-flex flex-column px-md-1 px-lg-0 flex-md-row">
            <div className="nav flex-column nav-pills mb-3 me-md-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h4 className="fw-bold mb-1 fs-5">Categories</h4>
                <div className="btn-categorie mb-3">
                    <button onClick={changeCategorie} className="nav-link text-start bg-transparent rounded-0 text-secondary mb-1 active" id="v-pills-all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-all" type="button" role="tab" aria-controls="v-pills-all" aria-selected="true">All</button>
                    <button onClick={changeCategorie} className="nav-link text-start bg-transparent rounded-0 text-secondary mb-1" id="v-pills-women-tab" data-bs-toggle="pill" data-bs-target="#v-pills-women" type="button" role="tab" aria-controls="v-pills-women" aria-selected="false">Women</button>
                    <button onClick={changeCategorie} className="nav-link text-start bg-transparent rounded-0 text-secondary mb-1" id="v-pills-men-tab" data-bs-toggle="pill" data-bs-target="#v-pills-men" type="button" role="tab" aria-controls="v-pills-men" aria-selected="false">Men</button>
                    <button onClick={changeCategorie} className="nav-link text-start bg-transparent rounded-0 text-secondary" id="v-pills-accessoire-tab" data-bs-toggle="pill" data-bs-target="#v-pills-accessoire" type="button" role="tab" aria-controls="v-pills-accessoire" aria-selected="false">Accessoire</button>
                </div>
                 <h4 className="fw-bold mb-2 fs-5">Filter</h4>
                <div className="position-relative">
                    <input onChange={showProducts} onKeyDown={searchForProduct} className="py-13 ps-13 pe-2 w-100" type="text" placeholder="Search Products..." />
                    <button onClick={searchForProduct} className="search-icon position-absolute end-0 top-50 translate-middle-y bg-transparent border-0 px-1 h-100"> <BiSearch /> </button>
                </div>
            </div>
                <div className="all-products tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab" tabIndex={0}>
                    <div className="grid-system">
                    {filteredProduct.length != 0 ? 
                        filteredProduct.map((element) => 
                        <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />):
                        <h3>No matche has been found</h3>
                    }
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-women" role="tabpanel" aria-labelledby="v-pills-women-tab" tabIndex={0}>
                    <div className="grid-system">
                        { filteredProduct.length != 0?
                            filteredProduct.map((element) => {
                                if(element.type == 'women'){
                                    return <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                                }
                            }) : <h3>No matche has been found</h3>
                        }
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-men" role="tabpanel" aria-labelledby="v-pills-men-tab" tabIndex={0}>
                    <div className="grid-system">
                    { filteredProduct.length != 0?
                            filteredProduct.map((element) => {
                                if(element.type == 'men'){
                                    return <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                                }
                            }) : <h3>No matche has been found</h3>
                        }
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-accessoire" role="tabpanel" aria-labelledby="v-pills-accessoire-tab" tabIndex={0}>
                    <div className="grid-system">
                    { filteredProduct.length != 0?
                            filteredProduct.map((element) => {
                                if(element.type == 'accessoire'){
                                    return <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                                }
                            }) : <h3>No matche has been found</h3>
                        }
                    </div>
                </div>
            </div>
         </div>
        </div>
    </section>
  );
};
