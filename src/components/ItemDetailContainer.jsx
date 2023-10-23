import React from "react";
import ItemDetail from "./ItemDetail";
import { Center } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      categoria: "mujeres",
      nombre: "Zapatilla Nike Roja",
      marca: "nike",
      color: "rojo",
      talle: 41,
      precio: 45000,
      imagen: "../public/images/nikeroja.jpg",
      descripcion: "Descripcion del Producto 1",
      cantidad: 1,
    },
    {
      id: 2,
      categoria: "hombres",
      nombre: "Zapatilla Nike Azul",
      marca: "nike",
      color: "azul",
      talle: 40,
      precio: 45000,
      imagen: "../public/images/nikeazul.jpeg",
      descripcion: "Descripcion del Producto 2",
      cantidad: 4,
    },
    {
      id: 3,
      categoria: "hombres",
      nombre: "Zapatilla Adidas Blanca",
      marca: "adidas",
      color: "blanco",
      talle: 40,
      precio: 40000,
      imagen: "../public/images/adidasblanca.jpeg",
      descripcion: "Descripcion del Producto 3",
      cantidad: 15,
    },
    {
      id: 4,
      categoria: "niños",
      nombre: "Zapatilla Puma Negra ",
      marca: "puma",
      color: "negro",
      talle: 43,
      precio: 35000,
      imagen: "../public/images/pumanegra.jpeg",
      descripcion: "Descripcion del Producto 4",
      cantidad: 7,
    },
    {
      id: 5,
      categoria: "mujeres",
      nombre: "Zapatilla Reebok Azul",
      marca: "reebok",
      color: "azul",
      talle: 44,
      precio: 30000,
      imagen: "../public/images/reebokazul.jpeg",
      descripcion: "Descripcion del Producto 5",
      cantidad: 2,
    },
    {
      id: 6,
      categoria: "niños",
      nombre: "Zapatilla Converse Roja",
      marca: "converse",
      color: "rojo",
      talle: 45,
      precio: 25000,
      imagen: "../public/images/converseroja.jpeg",
      descripcion: "Descripcion del Producto 6",
      cantidad: 8,
    },
  ];

  const obtenerProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No se encontraron productos");
    }
  });

  obtenerProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Center p="1rem">
        <ItemDetail productos={productos} />
      </Center>
    </>
  );
};

export default ItemDetailContainer;
