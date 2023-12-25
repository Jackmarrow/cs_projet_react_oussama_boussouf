import './BasketPreview.scss';

export const BasketPreview = (props) => {

    return (
        <div className="basket-item d-flex align-items-center gap-1 mb-13">
            <img src={props.imageSrc} alt="" />
            <div>
                <p className="mb-13"> {props.name} </p>
                <p className="mb-0 price">{props.amount} x $ {props.price}</p>
            </div>
        </div>
    );
};
