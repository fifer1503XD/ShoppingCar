import { types } from '../types/types';
import Swal from 'sweetalert2';
import { fetchSinToken } from "../helpers/fetch";
import { newProductInCar } from './car.actions';

export const GetDataProducts = () => {
    return async (dispatch) => {
        const resp = await fetchSinToken('products', {}, 'GET');
        const response = await resp.json();
        if (response) {
            dispatch(DataProducts(
                response
            ))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo cargar información'
            })


        }
    }
}


export const AddProductToCar = (_id, dataProducts,dataProductsCar) => {
    return async (dispatch) => {
        try {
            const producto = dataProducts.map((product) => {
                if (product._id === _id) {
                    product.countInStock = product.countInStock - 1
                    return (product)
                } else {
                    return (product)
                }
            })
            await dispatch(AddProductCar(producto))
            //envio producto al carro
            await dispatch(newProductInCar(_id,dataProducts,dataProductsCar))
            Swal.fire({
                icon: 'success',
                title: 'El producto ha sido agregado al carrito',
                text: `Sigue en tu busqueda :D`
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
            })
        }
    }
}
export const AddProductToStock = (_id, dataProducts,cant) => {
    console.log(cant)
    return async (dispatch) => {
        try {
            const producto = dataProducts.map((product) => {
                if (product._id === _id) {
                    product.countInStock = product.countInStock + cant
                    return (product)
                } else {
                    return (product)
                }
            })
            Swal.fire({
                icon: 'error',
                title: 'El producto ha sido devuelto al stock',
                text: `Sigue en tu busqueda :D`
            })
            dispatch(DataProducts(
                producto
            ))
           

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
            })
        }
    }
}


export const DataProducts = (products) => ({
    type: types.ProductsData,
    payload: products
});

export const AddProductCar = (products) => ({
    type: types.AddProduct,
    payload: products
});

export const actualizarLocalProduct=(product)=>{

    localStorage.setItem('product',JSON.stringify (product) );
}