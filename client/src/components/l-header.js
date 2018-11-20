import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  max-width: 920px;
  width: 100%;
  margin: auto;
`;

const Menu = styled.div`
  display: flex;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
  height: 70px;
  align-items: center;
`;

const ItemLink = styled.div`
  padding: 10px;
  text-decoration: none;
  text-transform: capitalize;

  a {
    color: #000000d6;
    text-decoration: none;
  }

  .selected {
    border-bottom: solid 2px #000000d6;
  }
`;

export default class TheHeader extends Component {
  renderCategories = () => {
    const { categories } = this.props;

    return Object.keys(categories).map((key) => {
      return <ItemLink key={categories[key].name} >
        <NavLink
          exact
          activeClassName="selected"
          to={`/${categories[key].name}`}>
          {categories[key].name}
        </NavLink>
      </ItemLink>
    })
  }

  render() {

    return (
      <Menu>
        <Wrapper>
          <ItemLink>
            <NavLink exact activeClassName="selected" to={`/`}>Home</NavLink>
          </ItemLink>
          {this.renderCategories()}
          <ItemLink>
            <NavLink exact activeClassName="selected" to={`/new-post`}>New Post</NavLink>
          </ItemLink>
        </Wrapper>
      </Menu>
    )
  }
}
