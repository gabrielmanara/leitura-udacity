import React, { Component } from 'react';
import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  border: 0;
  /* height: 40px; */
  width: auto;
  border: 2px solid #03a87c;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default class ButtonDefault extends Component {
  render() {
    const { title, handle, value } = this.props;
    return (
      <Button 
        value={value}
        onClick={() => handle(value)}>
        {title}
      </Button>
    )
  }
}
