import React, { Component } from 'react';
import CardComment from "components/card-comment";
import InputComment from "components/input-comment";
import styled from "styled-components";

const Box = styled.div`
  background: #eaeaea;
  padding: 1em;
`;


export default class Comments extends Component {

  updateComment = (value, id) => {
    this.props.updateValue(value, id)
  }

  insertNewComment = (body) => {
    this.props.insertNewComment(body);
  }

  render() {
    const { comments } = this.props;
    
    return (
      <Box>
        {Object.keys(comments).map((key) => {
          return <CardComment
            key={key}
            updateComment={this.updateComment}
            comment={comments[key]} />
        })}
        <InputComment
          insertNewComment={this.insertNewComment}
        />
      </Box>
    )
  }
}
