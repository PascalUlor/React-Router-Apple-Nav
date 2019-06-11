import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { DummyData } from "../dummyData";
import SubNav from "./SubNav";


const NavContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const NavItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50rem;
  a {
    margin: 2rem 0;
    text-decoration: none;
    color: white;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentDidMount() {
    this.setState({
      nav: DummyData
    });
  }
  render() {
    return (
    <NavContainer>
      <NavItem>
        {this.state.nav.map((data, index) => (
          <Link key={index} to={`/${data.name}`}>{data.name}</Link>
        ))}
    </NavItem>
        <Route 
          exact path='/:name'
          component={SubNav}
        />
    </NavContainer>
      
    );
  }
}

export default Nav;
