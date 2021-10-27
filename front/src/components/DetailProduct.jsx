
import "./product.css"
import Rating from "react-rating"
import { AddProductToCar } from "../actions/products.actions";
import { useDispatch, useSelector } from "react-redux";

const DetailProduct = (props) => {
    const dispatch = useDispatch();
    const dataProducts = useSelector(state => state.product.products)
    const dataProductsCar = useSelector(state => state.car.detailProducts);
    const { _id,name, image, price, countInStock, rating, description, brand, category, numReviews } = props.product
    return (

        <div class="detailProduct" onClick={() => props.productselect('')}>
            <div className="row-1 degrade">
                <div class="product-desc">
                    <span className="product-title">
                        <b>{name}</b>
                    </span>

                </div>
            </div>
            <div className="row-2">
                <div class="column-1 padding-1">

                    <div className="product-price">
                        <p><b>Brand: </b> {brand}</p>
                        <b> Description: </b>{description}
                    </div>
                    <div>
                        <h4>Rating: {rating}</h4>
                        <Rating initialRating={rating} readonly />
                    </div>
                    <p><b>Number of Reviews: </b>{numReviews}</p>
                </div>
                <div className="column-2">
                    <img src={`http://localhost:5000/${image}`} alt="Shoe" className="product-img" />
                </div>
                <div className="column-3 padding-1">
                    <div className="product-properties">
                    <div className="product-price">
                            Category :  <b>{category}</b>
                        </div>
                        <div className="product-price">
                            USD <b>{price}</b>
                        </div>

                        <div className="product-price">
                            Stock: <b>{countInStock}</b>
                        </div>

                        <div className="">
                            {countInStock > 0 ? 
                            (<button onClick={()=>dispatch(AddProductToCar(_id,dataProducts,dataProductsCar))} className=" button ">
                            <h3>Add item to cart</h3>
                            </button>)
                            :
                            (<button disabled="true" onClick={()=>dispatch(AddProductToCar(_id,dataProducts,dataProductsCar))} className=" button ">
                            <h3>Add item to cart</h3>
                            </button>)
                            }
                            
                        </div>



                    </div>
                </div>
            </div>


        </div>

    );
}

export default DetailProduct;