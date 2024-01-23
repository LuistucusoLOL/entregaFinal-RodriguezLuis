import React, { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarC, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const [error, setError] = useState('');

    const manejadorSubmit = async (event) => {
        event.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor completa todos los campos para concretar la compra 😄');
            return;
        }

        if (email !== emailConfirmacion) {
            setError('Los emails no coinciden, vuelve a intentarlo 😅');
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        try {
            await Promise.all(
                orden.items.map(async (productoOrden) => {
                    const productoRef = doc(db, 'inventario', productoOrden.id);
                    const productoDoc = await getDoc(productoRef);
                    const stockActual = productoDoc.data().stock;

                    await updateDoc(productoRef, {
                        stock: stockActual - productoOrden.cantidad,
                    });
                })
            );

            const docRef = await addDoc(collection(db, 'recibo'), orden);
            setOrdenId(docRef.id);
            vaciarC();
            setError('');
        } catch (error) {
            console.error('Error al crear la orden ', error);
            setError('No se pudo crear la orden. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <h3>Checkout</h3>

            <form onSubmit={manejadorSubmit}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>
                            {producto.item.nombre} x {producto.cantidad}
                        </p>
                        <p>Precio: $ {producto.item.precio}</p>
                        <hr />
                    </div>
                ))}
                <hr />

                <p>Total a pagar: $ {total}</p>

                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Finalizar Orden</button>

                {ordenId && (
                    <div className="success-message">
                        ¡Gracias por su compra! Tu número de orden es: {ordenId}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Checkout;

