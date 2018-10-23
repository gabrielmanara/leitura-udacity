import React, { Component } from 'react';
import styled from "styled-components";

const Post = styled.article`
  margin-bottom: 25px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`;

const Link = styled.a`
  color: ${props => props.theme.textColor.links};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.textColor.linksHover};
  }
`;

const Details = styled.div`
  display: flex;
`;

const Info = styled.h4`
  margin: 0 30px 0 0;
  position: relative;
  color: ${props => props.theme.textColor.text};

  &:after {
    content: "";
    width: 10px;
    height: 10px;
    position: relative;
    border-radius: 100%;
    background: ${props => props.theme.textColor.text};
    display: inline-block;
    position: absolute;
    right: -20px;
    top: 3px;
  }
`;

export default class Card extends Component {
  render() {
    const { post } = this.props;
    return (
      <Post>
        <Title>
          <Link href="#">{post.title}</Link>
        </Title>
        <Details>
          <Info>{post.voteScore} points</Info>
          <Info>{post.author}</Info>
          <Info>{post.category}</Info>
          <Info>{post.commentCount} comments</Info>
        </Details>
      </Post>
    )
  }
}
