import React, { Component } from 'react';
import CardComment from "components/card-comment";
import InputComment from "components/input-comment";
import styled from "styled-components";
import { FaRegGrinBeam, FaRegFrown } from 'react-icons/fa';


const Box = styled.div`
  background: #eaeaea;
  padding: 1em;
`;

const CommentWrapper = styled.div`
  margin-bottom: 20px;
  border-bottom: solid 2px;
  padding-bottom: 10px;
`;

const ActionWrapper = styled.div`
  display: flex;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  svg {
    margin-right: 10px;
  }
`;

export default class Comments extends Component {

  updateComment = (value, id) => {
    this.props.updateValue(value, id)
  }

  insertNewComment = (body) => {
    this.props.insertNewComment(body);
  }

  voteComment = (value, id) => {
    this.props.updateVoteComment(id, value);
  }

  render() {
    const { comments } = this.props;
    
    return (
      <Box>
        {Object.keys(comments).map((key) => {
          return (<CommentWrapper key={key}>
            <CardComment
              updateComment={this.updateComment}
              comment={comments[key]} />
              
              <ActionWrapper>
                <span onClick={() => this.voteComment("upVote", comments[key].id)}><FaRegGrinBeam />Like</span>
                <span onClick={() => this.voteComment("downVote", comments[key].id)}><FaRegFrown /> Dislike</span>
              </ActionWrapper>
            </CommentWrapper>)
        })}
        <InputComment
          insertNewComment={this.insertNewComment}
        />
      </Box>
    )
  }
}
