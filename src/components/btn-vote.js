import React, { Component } from 'react';
import styled from "styled-components";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const VoteButton = styled.button`
  appearance: none;
  border: none;
  height: 14px;
  display: flex;
  font-size: 14px;
  cursor: pointer;
`;

export default class PlusMinus extends Component {
  render() {
    return (
      <div>
        <VoteButton
          onClick={event => this.props.handleClick("upVote", this.props.id)}>
          <FaAngleUp />
        </VoteButton>
        <VoteButton
          onClick={event => this.props.handleClick("downVote", this.props.id)}>
          <FaAngleDown />
        </VoteButton>
      </div>
    )
  }
}
