import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import './ProductDetail.css';
import { CarritoContext } from '../../context/CarritoContext';

const ProductDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarC } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    const item = { id, nombre, precio, img };
    agregarC(item, cantidad);
    setAgregarCantidad(cantidad);
  };

  return (
    <div className='contenedorItem'>
      <div className="item-image">
        <img src={img} alt={nombre} />
      </div>

      <div className="item-info">
        <h2>{nombre}</h2>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
      </div>

      <div className="item-controls">
        {agregarCantidad > 0 ? (
          <>
            <Link to="/cart">Terminar Compra</Link>
            <Link to="/">Seguir Comprando</Link>
          </>
        ) : (
          <>
            <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
            <Link to="/">Seguir Comprando</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;

