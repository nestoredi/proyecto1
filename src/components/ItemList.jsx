import React from 'react'
import Item from './Item';

 const ItemList = ({productList}) => {

  return (
    <div style={{display: 'flex', gap: '2rem'}}>
      {
        productList.map(item => <Item key={item.id} item={item} />)
      }
    </div>

  )
}
export default ItemList;
