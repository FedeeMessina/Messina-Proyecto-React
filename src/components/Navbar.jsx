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
          <Link to={"/"}>
            <h1>Messina's Proyect</h1>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>Categorias</MenuButton>
            <MenuList>
              <Link to={"/categoria/hombres"}>
                <MenuItem>Hombres</MenuItem>
              </Link>
              <Link to={"/categoria/mujeres"}>
                <MenuItem>Mujeres</MenuItem>
              </Link>
              <Link to={"categoria/niños"}>
                <MenuItem>Niños</MenuItem>
              </Link>
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
