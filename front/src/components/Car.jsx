import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarLocalCar, deleteProductCar, numberOfProducts } from "../actions/car.actions";
import "./product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Car = () => {
    const dispatch = useDispatch();
     let totalProducts = 0
    const dataProductsCar = useSelector(state => state.car.detailProducts);
    const dataProducts = useSelector(state => state.product.products);
    useEffect(() => {
        actualizarLocalCar(dataProducts)
    }, [dataProducts]);
    useEffect(() => {
        console.log('cambio total')
        dispatch(numberOfProducts(totalProducts))
    }, [totalProducts]);
    let totalCar = 0
   
    return (
        <>
            <div className="containerCar">
                {dataProductsCar.map((product) => {
                    totalCar += product.price * product.cantidad
                    totalProducts+=product.cantidad
                    console.log(totalProducts)
                    return (
                        <div key={product._id} className="productInCar">
                            <div className="column-1" >
                                <img src={`http://localhost:5000/${product.image}`} alt="Shoe" className="imgProductCar" />
                            </div>
                            <div className="columnp-2">
                            <p>{product.name} </p>
                            <p>Cost: {(product.price*product.cantidad).toFixed(2)} Usd   Cantidad: {product.cantidad}</p>
                            </div>
                            <div className="columnp-3">
                            <FontAwesomeIcon className="icon" onClick={()=>dispatch(deleteProductCar(product._id,dataProductsCar,dataProducts))} icon={faTrashAlt} /> 
                            </div>
                           
                        </div>
                    )
                })}
                totalCar: {totalCar.toFixed(2)}
            </div>


        </>
    );
}

export default Car;