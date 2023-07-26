import './HeroSection.scss';
import shirtCollection from '../../../assets/images/shirt-collection.jpg';
import jeansCollection from '../../../assets/images/jeans-collection.jpg';
import modal from '../../../assets/images/master-slide.jpg';


export const HeroSection = () => {
  return (
    <header className="hero-section px-3 px-lg-0 text-center d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-white fw-bold pb-1'>SHIRT COLLECTION</h1>
        <p className='text-white mt-1 mb-2'>New Collection</p>
        <button className='btn rounded-pill px-2 py-11 bg-white'>SHOP NOW</button>
    </header>
  );
};
