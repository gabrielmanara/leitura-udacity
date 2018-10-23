import React, { Component } from 'react';
import Header from 'components/l-header';
import styled, { createGlobalStyle } from 'styled-components';
import Posters from "containers/Posters";
import styledNormalize from 'styled-normalize';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');

  body {
    font-family: 'PT Sans Caption', sans-serif;
  }
`;

const Content = styled.div`
  max-width: 768px;
  padding: 1em;
`;

class App extends Component {
  render() {
    return (
      <Content>
        <GlobalStyle />
        <Router>
          <Route exact path="/" component={Posters} />
        </Router>
      </Content>
    );
  }
}

export default App;
