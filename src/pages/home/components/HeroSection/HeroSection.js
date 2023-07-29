import './HeroSection.scss';
import shirtCollection from '../../../../assets/images/events-1.jpg';
import jeanCollection from '../../../../assets/images/events-2.jpg';

export const HeroSection = () => {
  return (
    <header className='hero-section d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-white fw-bold pb-1'>SHIRT COLLECTION</h1>
        <p className='text-white mt-1 mb-2'>New Collection</p>
        <button className='btn rounded-pill px-2 py-11 bg-white'>SHOP NOW</button>
    </header>
  );
};
