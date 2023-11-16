import React from "react";
import { useState, useContext } from "react";
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
  const {
    carrito,
    setCarrito,
    cantidadProductosCarrito,
    agregarProducto,
    borrarProducto,
    vaciarCarrito,
  } = useContext(CartContext);

  console.log(carrito);
  const { id, nombre, precio } = carrito;

  return (
    <div>
      {carrito.map((carrito) => (
       
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Cantidad</Th>
                  <Th>Nombre</Th>
                  <Th>Precio</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td>carrito.count</Td>
                  <Td>carrito.nombre</Td>
                  <Td>carrito.precio</Td>
                  <Td>
                    <Button onClick={borrarProducto} colorScheme="red">
                      X
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Center h="100px">Total</Center>
                </Tr>
              </Tfoot>
              <Box></Box>
              <Box>
                <Center>
                  <Button onClick={vaciarCarrito} colorScheme="red">
                    Vaciar carrito
                  </Button>
                </Center>
              </Box>
            </Table>
          </TableContainer>
           ))}
    </div>
  );
};

export default Cart;
