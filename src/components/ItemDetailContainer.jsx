import React from "react";
import ItemDetail from "./ItemDetail";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [producto, setProducto] = useState()

  useEffect(() => {
      const db = getFirestore();
      const oneItem = doc(db, "productos", `${id}`);



       getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()){
          setProducto({ id: snapshot.id, ...snapshot.data()});    }
      }); 
    }, []);
    


 

  return (
    <>
      <Center p="1rem">
        <ItemDetail producto={producto} />
      </Center>
    </>
  );
};

export default ItemDetailContainer;
