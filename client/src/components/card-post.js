import React, { Component } from 'react';
import { converDate } from "utils/helpers";
import styled from "styled-components";

const Title = styled.h1`
  color: ${props => props.theme.textColor.textDark};
  padding-bottom: 10px;
  border-bottom: solid 1px ${props => props.theme.textColor.textDark};
`;

const InfoWrapper = styled.div`
  color: ${props => props.theme.textColor.textDark};
`;

const Text = styled.p`
  color: ${props => props.theme.textColor.textDark};
`;

export default class CardPost extends Component {
  render() {
    const { post } = this.props;
    return (
      <article>
        <Title>{post.title}</Title>
        <InfoWrapper>
          <span>{post.author}</span>
          <span> | </span>
          <span>{post.timestamp && converDate(post.timestamp)}</span>
          <span> with {post.voteScore} of vote score</span>
          <span> and {post.commentCount} comments</span>
        </InfoWrapper>
        <Text>{post.body}</Text>
      </article>
    )
  }
}
