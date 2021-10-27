
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { AddProductToStock } from './products.actions';

export const newProductInCar = (_id, dataProducts, dataProductsCar) => {
    return async (dispatch) => {
        try {
            const productoInCar = dataProductsCar.filter(product => product._id === _id)
            if (productoInCar.length > 0) {
                const producto = dataProductsCar.map((product) => {
                    if (product._id === _id) {
                        product.cantidad = product.cantidad + 1
                        return (product)
                    } else {
                        return (product)
                    }
                })
                await dispatch(AddProductCarExist(producto))

            }
            else {
                const productoInCar = dataProducts.filter(product => product._id === _id)
                productoInCar[0].cantidad = 1
                dispatch(AddProductCar(productoInCar[0]))
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
            })
        }
        actualizarLocalCar()
    }

}
export const deleteProductCar = (_id, dataProductsCar,dataProducts) => {
    console.log(dataProductsCar)
    return async (dispatch) => {
        try {
            const producto = dataProductsCar.filter((product=>product._id !==_id))
            const productoDelete = dataProductsCar.filter((product=>product._id ===_id))
            console.log("cant",productoDelete[0])
            const cant=productoDelete[0].cantidad
            console.log("cant",producto)
            await dispatch(AddProductCarExist(producto))
            await dispatch(AddProductToStock(_id,dataProducts,cant))
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `no se puso agregar ${error}`
            })
        }

    }
}


export const actualizarLocalCar = (car) => {

    localStorage.setItem('car', JSON.stringify(car));
}
export const AddProductCar = (product) => ({
    type: types.CarAddProduct,
    payload: product
});

export const AddProductCarExist = (product) => ({
    type: types.CarAddProductExist,
    payload: product
});

export const numberOfProducts = (product) => ({
    type: types.CarNumberOfProducts,
    payload: product
});