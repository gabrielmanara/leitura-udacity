import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import * as postActions from 'actions/posts';
import * as commentsActions from 'actions/comments';
import CardPost from "components/card-post";
import CardComments from "components/card-comments";
import PostForm from "containers/PostForm";
import { FaRegGrinBeam, FaRegFrown } from 'react-icons/fa';
const uuidv4 = require('uuid/v4');


const PostWrapper = styled.div`
  width: 100%;
`;

const ActionPost = styled.div`
  padding-bottom: 20px;
  display: flex;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 5px;

    &:first-of-type {
      padding-left: 0;
    }
  }

  svg {
    margin-right: 10px;
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
    this.props.commentCounter(true)
  }

  deleteComment = (id) => {
    this.props.handleDeleteComment(id);
    this.props.commentCounter(false);
  }

  votePost = (type, id) => {
    this.props.handleVote({
      id: id,
      vote: { option: type }
    })
  }

  render() {
    const { post, comments } = this.props;
    const { editMode } = this.state;

    return (
      <PostWrapper>
        { post && 
        !editMode && 
        <CardPost post={post} /> }

        { post && 
          editMode && 
          <PostForm 
            handleUpdate={() => this.handleEditMode()} 
            post={post} /> }
        
        {!editMode &&
          <ActionPost>
            <span onClick={() => this.handleEditMode()}>Edit</span> |
            <span onClick={() => this.handleDelete()}>Delete</span>

            <span onClick={() => this.votePost("upVote", post.id)}><FaRegGrinBeam />Like</span>
            <span onClick={() => this.votePost("downVote", post.id)}><FaRegFrown /> Dislike</span>
          </ActionPost>
        }

        {!editMode && 
          comments && 
          <CardComments
            updateValue={this.handleUpdateComment}
            insertNewComment={this.handleNewComment}
            deleteComment={this.deleteComment}
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