import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContex";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Center,
  Button,
  Box,
} from "@chakra-ui/react";

const Cart = () => {
  const { carrito, borrarProducto, totalAPagar, vaciarCarrito } =
    useContext(CartContext);

  return (
    <div>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>CANTIDAD</Th>
              <Th>NOMBRE</Th>
              <Th>PRECIO</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {carrito.map((producto) => (
              <Tr key={producto.id}>
                <Td></Td>
                <Td>{producto.count}</Td>
                <Td>{producto.nombre}</Td>
                <Td>${producto.precio}</Td>
                <Td>
                  <Button
                    onClick={() => borrarProducto(producto.id)}
                    colorScheme="red"
                  >
                    X
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Center h="100px">
                <h2>Total = ${totalAPagar()}</h2>
              </Center>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Box>
        <Center>
          <Button onClick={vaciarCarrito} colorScheme="red">
            Vaciar carrito
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default Cart;
