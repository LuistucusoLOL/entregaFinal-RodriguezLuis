import { Link,NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {
  const imgCarrito = '../CartWidget/carrito1.png'; 

  return (
    <nav>
      <Link to="/">
            <h1>Lodepepe</h1>
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to="/categoria/arepas">Arepa</NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/bebidas">Bebidas</NavLink>
                </li>
                <li>
                    <NavLink to="/categoria/empanadas">Empanadas</NavLink>
                </li>
            </ul>
        </nav>

      <CartWidget itemCount={3} imgCarrito={imgCarrito} />
    </nav>
  );
};

export default Navbar;
