import React from "react";
import { Navbar, Text } from "@nextui-org/react";
import { NavLink } from 'react-router-dom';

export default function Template() {
  const [variant] = React.useState("default");


  
  return (

      <Navbar variant="sticky">
        <Navbar.Content hideIn="xs" variant={variant}>

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/ajouter">Ajouter</NavLink></li>
            </ul>

        </Navbar.Content>
      </Navbar>
     

  )
}
