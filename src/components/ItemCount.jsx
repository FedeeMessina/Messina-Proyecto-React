import { useState, useContext } from "react";
import { Button, Box, Spacer, Flex } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContex";
const ItemCount = () => {
  
  const [count, setCount] = useState(0);
  const {agregarProducto} = useContext(CartContext)

  


  return (
    <Flex>
      <Box>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
          m={1}
        >
          -
        </Button>
        <Button m={1}>{count}</Button>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => setCount(count + 1)}
          m={1}
        >
          +
        </Button>
      </Box>
      <Spacer />
      <Box m={1}>
        <Button onClick={agregarProducto}>Agregar Al Carrito</Button>
      </Box>
    </Flex>
  );
};

export default ItemCount;
