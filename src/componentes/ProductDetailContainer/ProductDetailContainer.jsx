import { useState, useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const referenciaProducto = doc(db, "inventario", idItem);
        const resultado = await getDoc(referenciaProducto);

        if (resultado.exists()) {
          const datosProducto = resultado.data();

          setProducto({ id: resultado.id, ...datosProducto });
        } else {
          console.log("El producto no existe.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    obtenerProducto();
  }, [idItem]);

  return (
    <div>
      {producto && <ProductDetail {...producto} />}
    </div>
  );
};

export default ProductDetailContainer;
