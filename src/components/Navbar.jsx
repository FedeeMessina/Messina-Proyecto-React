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
  Image
} from "@chakra-ui/react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.jpg"

const Navbar = () => {
  return (
    <div>
      <Flex align="center" justify="center" maxW="100%" bg="black">
        <Box  maxW="15%" p="4">
          {/* ACA PONGO EL LOGO DE LA PAGINA */}
          <Link to={"/"}>
            <Image className="Logo" src={logo} alt="Messina's Project" />
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              color="white"
              className="btnCategorias"
            >
              Categorias
            </MenuButton>
            <MenuList className="dropdownCategorias">
              {/* ACA LE PASO LOS LINKS CON LOS BACKSTICK PARA QUE SE ACOMODEN A LA CATEGORIA Q VA TRAYENDO */}
              <Link to={`/categoria/${"hombres"}`}>
                <MenuItem>Hombres</MenuItem>
              </Link>
              <Link to={`/categoria/${"mujeres"}`}>
                <MenuItem>Mujeres</MenuItem>
              </Link>
              <Link to={`categoria/${"niños"}`}>
                <MenuItem>Niños</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4" bg="black">
          {/*ACA PASO EL COMPONENTE CARTWIDGET QUE ES EL Q TIENE EL BADGE CON EL CONTADOR DE CADA PRODUCTO DISTINTO */}
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
