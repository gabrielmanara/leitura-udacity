import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Posters from "containers/Posters";
import Post from "containers/Post";
import styledNormalize from 'styled-normalize';
import { connect } from "react-redux";
import * as actionCreators from 'actions/categories';

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
  margin: auto;
`;

const Menu = styled.div`
  display: flex;
  background: ${props => props.theme.backgroundColor.menu};
  height: 70px;
  align-items: center;
`;

const ItemLink = styled.div`
  padding: 10px;
  text-decoration: none;
  text-transform: capitalize;

  a {
    color: white;
    text-decoration: none;
  }

  .selected {
    border-bottom: solid 2px white;
  }
`;
class App extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  };

  renderCategories = () => {
    const { categories } = this.props;

    return Object.keys(categories).map((key) => {
      return <ItemLink key={categories[key].name} >
              <NavLink
                exact
                activeClassName="selected"
                to={`/category/${categories[key].name}`}>
                  {categories[key].name}
              </NavLink>
            </ItemLink>
    })
  }
  
  render() {
    return (
      <div>
        <GlobalStyle />
        <Router>
          <div>
            <Menu>
              <Wrapper>
                <ItemLink>
                  <NavLink exact activeClassName="selected" to={`/`}>Home</NavLink>
                </ItemLink>
                {this.renderCategories()}
              </Wrapper>
            </Menu>

            <Wrapper>
              <Switch>
                <Route exact path="/" component={Posters} />
                <Route exact path={`/category/:category`} render={(props) => (
                  <Posters {...props}/>
                )} />
                <Route exact path="/posts/:id" component={Post} />
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
