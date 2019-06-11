import React from 'react';
// import { Route } from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';

const NavContainer = styled.div`
background-color: #000;
height: 5rem;
`;

function NavWrapper() {
  return (
    <NavContainer>
      <Nav />
    </NavContainer>
  );
}

export default NavWrapper;
