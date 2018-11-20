import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Posts from "containers/Posts";
import Post from "containers/Post";
import PostForm from "containers/PostForm";
import styledNormalize from 'styled-normalize';
import { connect } from "react-redux";
import * as actionCreators from 'actions/categories';
import TheHeader from "components/l-header";

import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

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
                <Route exact path="/" component={Posts} />
                <Route exact path={`/:category`} render={(props) => (
                  <Posts {...props}/>
                )} />
                <Route exact path="/posts/:id" component={Post} />
                <Route exact path="/new-post" component={PostForm} />
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
