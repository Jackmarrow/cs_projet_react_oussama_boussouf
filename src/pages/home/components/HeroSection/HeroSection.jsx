import './HeroSection.scss';
import shirtCollection from '../../../../assets/images/clothes-image/shirt-collection.jpg';
import jeanCollection from '../../../../assets/images/clothes-image/jean-collection.jpg';
import greenShirt from '../../../../assets/images/clothes-image/green-shirt.jpg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <>
    <header className='hero-section mt-8 px-md-0 text-center'>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item position-relative active carousel-item">
            <img src={greenShirt} className="d-block object-fit-cover w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item position-relative carousel-item">
            <img src={shirtCollection} className="d-block object-fit-cover w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item position-relative carousel-item">
            <img src={jeanCollection} className="d-block object-fit-cover w-100 h-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        {/* Hero Text */}
        <div className='position-absolute top-50 start-50 translate-middle'>
              <h1 className='text-white fw-bold pb-1'>SHIRT COLLECTION</h1>
              <p className='text-white mt-1 mb-2'>New Collection</p>
              <Link to={'/product'}> <button className='btn-cta rounded-pill px-2 py-11 border-0'>SHOP NOW</button></Link>
        </div>
        {/* End Of Hero Text */}
      </div>
    </header>
    </>
  );
};
