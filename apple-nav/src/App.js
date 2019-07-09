import React from 'react';
import styled from 'styled-components';
import NavWrapper from './component/NavWrapper';


const AppWrapper = styled.div`
height: 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <NavWrapper />
    </AppWrapper>
  );
}

export default App;
