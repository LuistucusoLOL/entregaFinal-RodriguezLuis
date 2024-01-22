import Item from "../Item/Item";
import './Catalogo.css';

const Catalogo = ({productos}) => {
  return (
    <div className="contenedorProductos">
        {
            productos.map(producto => <Item key={producto.id} {...producto} />)
        }
    </div>
  )
}

export default Catalogo