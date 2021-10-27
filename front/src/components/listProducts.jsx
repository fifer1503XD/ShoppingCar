
import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualizarLocalCar } from "../actions/car.actions";
import { actualizarLocalProduct, DataProducts, GetDataProducts } from "../actions/products.actions";
import DetailProduct from "./DetailProduct";
import ProductCard from "./product";

const ListPorducts = memo(() => {
    const [ProductSelect, setProductSelect] = useState('');
    const dataProducts = useSelector(state => state.product.products)
    const dispatch = useDispatch();
    const inventory = useMemo(()=>JSON.parse(localStorage.getItem('product')),[]);
    useEffect(() => {
        if (inventory)dispatch(DataProducts(inventory))
        else dispatch(GetDataProducts());
    }, [dispatch,inventory]);
    const dataProductsCar = useSelector(state => state.car.detailProducts);
    useEffect(() => {
        actualizarLocalCar(dataProductsCar)
        actualizarLocalProduct(dataProducts)
    }, [dataProductsCar,dataProducts]);
    return (


        <>
            {ProductSelect === '' ?
                (
                    <div className="containerProducts">
                        {dataProducts.map((product) => {
                            return (<ProductCard key={product._id}  product={product} productselect={setProductSelect} />)
                        })}
                    </div>
                )
                :
                <div className="containerProduct">
                <DetailProduct product={ProductSelect} productselect={setProductSelect} />
                </div>
}
        </>



    );
})

export default ListPorducts;