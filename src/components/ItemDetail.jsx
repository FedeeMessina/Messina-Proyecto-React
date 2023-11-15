/* import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({productos}) => {
  
  const { id } = useParams();
  const filteredProductById = productos.filter((productos) => productos.id == id);


  console.log(filteredProductById)

  return (
    <div key={id}>
      {
        filteredProductById.map((productos) => {
        return (
          <Card className= "cardContainer" maxW="sm">
            <CardBody className= "cardProduct">
              <Image className= "cardImage" src={productos.imagen} alt="" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{productos.nombre}</Heading>
                <Text>{productos.descripcion}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${productos.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <ItemCount/>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemDetail;
 */

import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filteredProductById = productos.filter(
    (producto) => producto.id == id
  );

  if (filteredProductById.length === 0) {
    return <p>Producto no encontrado</p>; // O puedes redirigir a una página de error
  }

  const producto = filteredProductById[0];

  return (
    <div key={id}>
      <Card className="cardContainer" maxW="sm">
        <CardBody className="cardProduct">
          <Image
            className="cardImage"
            src={producto.imagen}
            alt=""
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{producto.nombre}</Heading>
            <Text>{producto.descripcion}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${producto.precio}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <ItemCount />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemDetail;