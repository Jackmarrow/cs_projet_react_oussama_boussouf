import './OurProducts.scss';
import { Item } from '../../../../layouts/Item';
import { useContext } from 'react';
import { Context } from '../../../../App';

export const OurProducts = () => {
    const productInfo = useContext(Context);

    return (
        <section className="our-products mb-8">
            <h2 className='text-center fw-bold fs-3 mb-2'>OUR PRODUCTS</h2>
            <div className="d-flex align-items-center flex-column">
                <div className="nav nav-pills mb-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0  active" id="v-pills-best-seller-tab" data-bs-toggle="pill" data-bs-target="#v-pills-best-seller" type="button" role="tab" aria-controls="v-pills-best-seller" aria-selected="true">Best Sellers</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-new-tab" data-bs-toggle="pill" data-bs-target="#v-pills-new" type="button" role="tab" aria-controls="v-pills-new" aria-selected="false">New</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-sale-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sale" type="button" role="tab" aria-controls="v-pills-sale" aria-selected="false">Sale</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-old-tab" data-bs-toggle="pill" data-bs-target="#v-pills-old" type="button" role="tab" aria-controls="v-pills-old" aria-selected="false">Old</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-best-seller" role="tabpanel" aria-labelledby="v-pills-best-seller-tab" tabindex="0">
                       <div className='grid-system'>
                        {
                            productInfo.map((element) => 
                            element.state == 'Best Seller' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                       </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-new" role="tabpanel" aria-labelledby="v-pills-new-tab" tabindex="0">
                        <div className='grid-system'>
                        {
                            productInfo.map((element) => 
                            element.state == 'New' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-sale" role="tabpanel" aria-labelledby="v-pills-sale-tab" tabindex="0">
                        <div className='grid-system'>
                        {
                            productInfo.map((element) => 
                            element.state == 'Sale' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-old" role="tabpanel" aria-labelledby="v-pills-old-tab" tabindex="0">
                       <div className='grid-system'>
                       {
                            productInfo.map((element) => 
                            element.state == 'Old' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};