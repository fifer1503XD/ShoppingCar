import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./product.css"
import { useEffect } from "react";
import { numberOfProducts } from "../actions/car.actions";

const CarIcon = (props) => {
    let totalProducts = 0;
    const dataProducts = useSelector(state => state.car.numberProducts);
    const dataProductsInCar = useSelector(state => state.car.detailProducts);

    const dispatch = useDispatch();

   useEffect(() => {
        dataProductsInCar.forEach(element => {
            totalProducts += element.cantidad
        });
        console.log(totalProducts)
        dispatch(numberOfProducts(totalProducts))
   }, [dataProductsInCar]);
    return ( 
        <div onClick={()=>props.setVisible(!props.visible)} className="cartIcon">
            <FontAwesomeIcon icon={faCartArrowDown} /> 
           <span className="numberIcon"> {dataProducts}</span>
        </div>
     );
}
 
export default CarIcon;