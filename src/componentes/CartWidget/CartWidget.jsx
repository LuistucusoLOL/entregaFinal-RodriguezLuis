import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './CartWidget.css';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito =
    'https://www.pngarts.com/files/3/Shopping-Cart-PNG-Download-Image.png';

  return (
    <div className='cart-widget-container'>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt='CarritoUwU' />
        {cantidadTotal > 0 && <span className='badge'>{cantidadTotal}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;

