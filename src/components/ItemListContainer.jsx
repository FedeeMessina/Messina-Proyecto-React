import React from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//import de la base de datos
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {
  const { categoria } = useParams();

  const [productos, setProductos] = useState([])

  useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "productos");

      getDocs(itemsCollection).then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  const filteredProduct = productos.filter(
    (producto) => producto.categoria == categoria
  ); 


  return (
      <>
          <Center className="itemListContainer" p="1rem">
              {categoria ? (
                  <ItemList productos={filteredProduct} />
              ) : (
                  <ItemList productos={productos} />
              )}

          </Center>
  </>
);
};

export default ItemListContainer;


