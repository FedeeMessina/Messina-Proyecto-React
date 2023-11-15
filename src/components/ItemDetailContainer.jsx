import React from "react";
import ItemDetail from "./ItemDetail";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [productos, setProducto] = useState()

  useEffect(() => {
      const db = getFirestore();
      const oneItem = doc(db, "productos", `${id}`);

      getDoc(oneItem).then((snapshot) => {
        if (snapshot.exists()){
          const docs = snapshot.data()
          setProducto(snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()})));
        }
      });
    }, []);
    
    console.log(id)

 

  return (
    <>
      <Center p="1rem">
        <ItemDetail productos={productos} />
      </Center>
    </>
  );
};

export default ItemDetailContainer;
