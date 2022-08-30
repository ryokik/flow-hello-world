import React from 'react';
import styled from 'styled-components'

import GetLatestBlock from './GetLatestBlock'
import Authenticate from './Authenticate'
import SignUserMassage from './SignUserMassage'
import SendTransaction from './SendTransaction'

const Wrapper = styled.div`
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <GetLatestBlock />
      <Authenticate />
      <SignUserMassage />
      <SendTransaction />
    </Wrapper>
  );
}

export default App;
