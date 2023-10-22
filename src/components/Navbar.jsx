import React from "react";
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Flex>
        <Box p="4" bg="red.400">
          {/* Brand */}
          <Link to= {"/"} >
          <h1>Messina's Proyect</h1>
          </Link>
        </Box>
        <Spacer />
        <Box >
          <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
              <MenuItem>Hombres</MenuItem>
              <MenuItem>Mujeres</MenuItem>
              <MenuItem>Niños</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          {/*Carrito */}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
