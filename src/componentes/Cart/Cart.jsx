
import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./cart.css";

const Cart = () => {
  const { carrito, vaciarC, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>
          No agregaste productos al carrito, agrega aunque sea un cepita que no
          tengo plata 😞
        </h2>
        <Link className="cart-action-button" to="/">
          Ver Productos
        </Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}
      <h3>Total: $ {total} </h3>
      <h3>Cantidad Total: {cantidadTotal} </h3>
      <button className="cart-action-button" onClick={() => vaciarC()}>
        Vaciar Carrito
      </button>
      <Link className="cart-action-button" to="/checkout">
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;

