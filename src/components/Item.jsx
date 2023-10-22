import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Image
} from "@chakra-ui/react";

const Item = ({
  id,
  nombre,
  descripcion,
  categoria,
  precio,
  cantidad,
  imagen,
}) => {
  return (
    <div>
     
        <Card maxW="sm">
          <CardBody>
            <Image src={imagen} alt="" borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{nombre}</Heading>
              <Text>{descripcion}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
               Ver Detalle
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Comprar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

    </div>
  );
};

export default Item;
