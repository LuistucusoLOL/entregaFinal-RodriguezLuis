import { useState, useEffect } from "react";
import Catalogo from "../Catalogo/Catalogo";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const CatalogoContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const consultaProductos = idCategoria
          ? query(collection(db, "inventario"), where("idCat", "==", idCategoria))
          : collection(db, "inventario");

        const resultado = await getDocs(consultaProductos);

        if (resultado.docs.length > 0) {

          const nuevosProductos = resultado.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));


          setProductos(nuevosProductos);
        } else {
        console.log("No hay productos disponibles.");
        }
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };


    obtenerProductos();
  }, [idCategoria]);

  return (
    <div>
      <Catalogo productos={productos} />
    </div>
  );
};

export default CatalogoContainer;
