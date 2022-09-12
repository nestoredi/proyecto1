import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {title, img, price, id} = item
    return (
      <div className='card-container'>
          <h4>{title}</h4>
          <div>
              <img className='img' src={img} alt={`Imagen del producto ${title}`} />
          </div>
          <p className='price'>{price} $</p>
          <Link to={`/detalles/${id}`}>
            <button className='button button-detail'>Ver mas detalles</button>
          </Link>
      </div>
    )
  }
 
export default Item;
