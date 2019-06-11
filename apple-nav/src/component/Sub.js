import React from 'react';
import styled from 'styled-components';


const ImgContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 50rem;
margin: 0 auto;
vertical-align: middle;
`;

const ImgDiv = styled.div`
width: 100%;
 `;

const Img = styled.img`
max-height: 60px;
width: 50%;
padding: .1rem;
margin: 0 1rem;
${props => (props.display.includes('Mac')? `filter: invert(100%);` : `none;`)};
`;



const Sub = ({ prod }) =>{
    
    const { subLinks } = prod;
    console.log("=======",subLinks);
    return (
        <ImgContainer>
        {
            subLinks.map((item, index)=>{
                return( 
                    <ImgDiv key={index}>
                    <Img key={index} src={item.img} 
                     display={item.name} alt="apple product"/>
                    </ImgDiv>
                    )
            })
        }
        </ImgContainer>
    )
}

export default Sub;

