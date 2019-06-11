import React, { Component } from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import { DummyData } from "../dummyData";
import Sub from './Sub';

const SubNavBar = styled.div`
background-color: rgba(189, 195, 199, 1);
/* background-color: #000; */
width: 100%;
height: 5rem;
margin: 0 auto;
`;
class SubNav extends Component {
    constructor(props){
        console.log('******',props)
        super(props)
        this.state = {
            sublink: []
        }
    }

    componentDidMount() {
        this.setState({
            sublink: DummyData
        });
    }
    Item =()=> this.state.sublink.filter((tag)=>{
        return tag.name === this.props.match.params.name
    })
    
    
    render(){
        return (
            <SubNavBar>
            {
                this.Item().map((product, index)=>{
                    console.log("++++++++",product);
                    return <Route
                            key={index}
                            path='/:name'
                            render= {
                                props=> <Sub 
                                    {...props} prod={product}
                                />
                            }
                            />
                })
            }
            </SubNavBar>
        )
    }
    
}

export default SubNav;