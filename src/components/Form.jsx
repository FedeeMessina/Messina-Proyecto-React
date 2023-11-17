import React from "react";
import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {
  FormControl,
  Center,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handleSubmit= (e) =>{
    e.preventDefault()

    addDoc(ordersCollection, order).then(({id})=>{
      setOrderId(id)
    })
  }

  const order = {
    nombre,
    apellido,
    email,
    direccion
  }

  const ordersCollection = collection(db, "MiOrden")

  return (
    <Center>
      <form action="" onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <FormHelperText>
            Ingrese el email donde quiera recibir su orden de compra
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Direccion</FormLabel>
          <Input type="text" placeholder="Direccion" onChange={(e) => setDireccion(e.target.value)}/>
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Finalizar Compra
        </Button>
        <p>Número de orden: {orderId} </p>
      </form>
    </Center>
  );
};

export default Form;
