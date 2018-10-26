import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Posters from "containers/Posters";
import styledNormalize from 'styled-normalize';
import Categories from "containers/Categories"
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

const Content = styled.div`
  max-width: 768px;
`;

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
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
    color: red;
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
      <Content>
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
              </Switch>
            </Wrapper>
            
          </div>
        </Router>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, actionCreators)(App);
