import React, { useContext , } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import './CartItem.css';

const CartItem = ({ item, cantidad, img }) => {
  const { eliminarP } = useContext(CarritoContext);

  return (
    <div className='cart-item'>
      <div className="cart-item-image">
      <img src={item.img} alt={item.nombre}>

      </img>
      </div>

      <div className="cart-item-info">
        <h4>{item.nombre}</h4>
        <p>Precio: {item.precio}</p>
        <p>Cantidad: {cantidad}</p>
      </div>

      <div className="cart-item-controls">
        <button onClick={() => eliminarP(item.id)}>Eliminar Producto</button>
      </div>
    </div>
  );
}

export default CartItem;
