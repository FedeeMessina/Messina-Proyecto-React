import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Center,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../App.css";

const Item = ({ id, nombre, imagen }) => {
  return (
    <div >
      <Card  className= "cardContainer" maxW="sm">
        <CardBody className= "cardProduct">
          <Image className= "cardImage"src={imagen} alt="" borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              <Center>
              <Link to={`/product/${id}`}
              >Ver Detalle
              </Link>
              </Center>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Item;
