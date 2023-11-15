import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => {
        return (
          <Item
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            descripcion={p.descripcion}
            categoria={p.categoria}
            precio={p.precio}
            cantidad={p.cantidad}
            imagen={p.imagen}
          />
        );
      })}
    </div>
  );
};

export default ItemList ;
