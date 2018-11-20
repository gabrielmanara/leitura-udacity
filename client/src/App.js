import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Posts from "containers/Posts";
import Post from "containers/Post";
import PostForm from "containers/PostForm";
import styledNormalize from 'styled-normalize';
import { connect } from "react-redux";
import * as actionCreators from 'actions/categories';
import TheHeader from "components/l-header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');

  body {
    font-family: 'PT Sans Caption', sans-serif;
  }
`;

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  max-width: 920px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
`;

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found <code>{location.pathname}</code></h3>
  </div>
)

class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  };
  
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <div>
            <TheHeader
              categories={this.props.categories}
            />

            <Wrapper>
              <Switch>
                <Route exact path="/new-post" component={PostForm} />
                <Route exact path="/" component={Posts} />
                <Route exact path="/:category/:id" component={Post} />
                <Route path="/:category" render={(props) => (
                  <Posts {...props}/>
                )} />

                <Route component={NoMatch} />
              </Switch>
            </Wrapper>
            
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, actionCreators)(App);
