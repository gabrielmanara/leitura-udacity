import React, { Component } from 'react';
import styled from "styled-components";
import { converDate } from "utils/helpers";
import { FaSave } from 'react-icons/fa';

const CommentTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const CommentItem = styled.div`
  margin-bottom: 20px;
`;

const CommentBody = styled.div`
  margin-left: 10px;
`;

const CommentEdit = styled.textarea`
  width: 100%;
`;

const EditMode = styled.span`
  padding: 0 10px;
  display: flex;
  cursor: pointer;
`;

export default class CardComment extends Component {
  state = {
    editMode: false,
    value: ""
  };

  componentDidMount() {
    this.setState({
      value: this.props.comment.body
    })
  }

  handleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  updateValue = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  saveComment = () => {
    this.props.updateComment(this.state.value, this.props.comment.id);
    this.setState({
      editMode: false
    });
  }

  render() {
    const { comment } = this.props;
    const { editMode, value } = this.state;

    return (
      <CommentItem>
        <CommentTitle>
          {comment.author} at {converDate(comment.timestamp)}
          {!editMode && <EditMode onClick={() => this.handleEditMode()}>Edit</EditMode>}
          {editMode && <EditMode onClick={() => this.saveComment()}><FaSave /> Save</EditMode>}
        </CommentTitle>
        {!editMode && <CommentBody>{comment.body}</CommentBody>}
        {editMode && <CommentEdit 
                        onChange={(event) => this.updateValue(event)}
                        value={value}></CommentEdit>}
      </CommentItem>
    )
  }
}
