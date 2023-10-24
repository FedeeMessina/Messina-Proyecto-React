import { useState } from "react";
import { Button, Box, Spacer, Flex } from "@chakra-ui/react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

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
        <Button>Agregar Al Carrito</Button>
      </Box>
    </Flex>
  );
};

export default ItemCount;
