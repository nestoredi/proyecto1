import React, { useEffect, useState } from 'react'
import products from './products'
import ItemDetails from './ItemDetails';
import { useParams } from 'react-router-dom';


const ItemDetailsContainer = () => {

  const {id} = useParams()


    const [item, setItem] = useState()

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(products.find(product => product.id === Number(id))), 2000)
      })


    useEffect(() => {
      getProduct()
      .then(response => setItem(response))
    }, [])
  
    
    return (
      <>
        {
          item ? <ItemDetails item={item}/> : <h1>Cargando...</h1>
        }
      </>
  )
}

export default ItemDetailsContainer;
