import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import * as postActions from 'actions/posts';
import * as commentsActions from 'actions/comments';
import CardPost from "components/card-post";
import CardComments from "components/card-comments";
import PostForm from "containers/PostForm";
const uuidv4 = require('uuid/v4');


const PostWrapper = styled.div`
  width: 100%;
`;

const ActionPost = styled.div`
  padding-bottom: 20px;

  span {
    cursor: pointer;
    padding: 0 5px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`;

class Post extends Component {
  state = {
    post: [],
    comments: [],
    editMode: false
  }

  handleEditMode = () => {
    this.setState({
      ...this.state,
      editMode: !this.state.editMode
    })
  }

  handleDelete = async() => {
    await this.props.deletePost(this.props.match.params.id);
    this.props.history.push(`/`);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }

  handleUpdateComment = (value, id) => {
    this.props.updateComment(id, value);
  }

  handleNewComment = (body) => {
    const { author, comment } = body;

    const params = {
      id: uuidv4(),
      author,
      body: comment,
      timestamp: Date.now(),
      parentId: this.props.match.params.id
    }

    this.props.newComment(params);
  }

  render() {
    const { post, comments } = this.props;
    const { editMode } = this.state;

    return (
      <PostWrapper>
        {post && !editMode && <CardPost post={post} />}
        {post && editMode && <PostForm handleUpdate={() => this.handleEditMode()} post={post} />}
        
        {!editMode &&
          <ActionPost>
            <span onClick={() => this.handleEditMode()}>Edit</span> |
            <span onClick={() => this.handleDelete()}>Delete</span>
          </ActionPost>
        }

        {!editMode && comments && <CardComments
          updateValue={this.handleUpdateComment}
          insertNewComment={this.handleNewComment}
          updateVoteComment={this.props.updateVote}
          comments={comments} />}
      </PostWrapper>
    )
  }
}

const mapDispatchToProps = {
  ...postActions,
  ...commentsActions
};

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    comments: state.comments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);