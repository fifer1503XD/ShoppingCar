import "./product.css"
import Rating from "react-rating"

const ProductCard = (props) => {

    const { name, image, price, countInStock, rating } = props.product
    return (
        <>
            <div className="container" onClick={()=>props.productselect(props.product)}>
                <div className="card">
                    <div className="card-head degrade">
                        <img src={`http://localhost:5000/${image}`} alt="Shoe" className="product-img" />
                    </div>
                    <div className="card-body">
                        <div className="product-desc">
                            <span className="product-title">
                                <b>{name}</b>
                            </span>

                        </div>
                        <div className="product-properties">
                            <div className="product-price">
                                USD <b>{price}</b>
                            </div>

                            <div className="product-price">
                                Stock: <b>{countInStock}</b>
                            </div>

                            <div>
                                <h4>Rating</h4>
                                <Rating initialRating={rating} readonly />
                    

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;