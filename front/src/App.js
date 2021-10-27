import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  AddProductCarExist } from './actions/car.actions'
import Car from './components/Car'
import CarIcon from './components/carIcon'
import ListPorducts from './components/listProducts'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')
  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------
  const [Visible, setVisible] = useState(false);
  const dispatch =useDispatch()
  const car = JSON.parse(localStorage.getItem('car'));
  
  useEffect(() => {
   if (car)dispatch(AddProductCarExist(car))
  }, [car,dispatch]);
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Prueba tecnica front Ecomsur 2021</h1>
      <div className="carComponent">
        {Visible ? <Car/>: null }
      
      </div>
      
      <CarIcon visible={Visible} setVisible={setVisible}/>
      <ListPorducts/>
      {/* Check to see if express server is running correctly */}
      <h5>{response}</h5>
    </div>
  )
}

export default App
