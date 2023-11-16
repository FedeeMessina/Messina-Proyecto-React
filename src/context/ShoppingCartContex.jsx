import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [badge, setBadge] = useState(0);

  const agregarProducto = (producto, count) => {
    alert(`vas a agregar ${count} unidades de ${producto.nombre} a tu carrito`);
    
    const {id, nombre,precio } = producto;
    const productoExistente = carrito.find((p) => p.id === producto.id);
    
    if (productoExistente) {
            const actualizarCarrito = [...carrito]
            actualizarCarrito(productoExistente).count += count
            setCarrito(actualizarCarrito)
            
        } 
        else{
            const nuevoProducto = {id, nombre, precio, count}
            const carritoNuevo = [...carrito, nuevoProducto]
            setCarrito(carritoNuevo)
            
        }
  };

  const borrarProducto = (idProducto) => {
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== idProducto
    );
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadProductosCarrito = () => {
    if (carrito.length > 0) {
      const itemsCarrito = carrito.length;
      setBadge(itemsCarrito);
    }
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        badge,
        setBadge,
        agregarProducto,
        borrarProducto,
        cantidadProductosCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
