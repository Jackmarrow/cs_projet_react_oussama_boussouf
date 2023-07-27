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
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0  active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Best Sellers</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">New</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Sale</button>
                    <button className="tab-btn nav-link bg-transparent text-secondary mx-1 rounded-0" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Old</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                       <div className='d-flex flex-column flex-md-row justify-content-center gap-1'>
                        {
                            productInfo.map((element) => 
                            element.state == 'New' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                       </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <div className='d-flex flex-column flex-md-row justify-content-center gap-1'>
                        {
                            productInfo.map((element) => 
                            element.state == 'New' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                        <div className='d-flex flex-column flex-md-row justify-content-center gap-1'>
                        {
                            productInfo.map((element) => 
                            element.state == 'Sale' ?
                            <Item name={element.name} price={element.price} imageSrc={element.imageSrc} state={element.state} />
                            : null
                            )
                        }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                       <div className='d-flex flex-column flex-md-row justify-content-center gap-1'>
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