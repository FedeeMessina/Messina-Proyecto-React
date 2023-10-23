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
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProduct = productos.filter((producto) => producto.id == id);
  return (
    <div>
      {
        filteredProduct.map((productos) => {
        return (
          <Card maxW="sm">
            <CardBody>
              <Image src={productos.imagen} alt="" borderRadius="lg" />
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
