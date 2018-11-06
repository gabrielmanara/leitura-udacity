import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import * as postActions from 'actions/posts';
import * as commentsActions from 'actions/comments';
import CardPost from "components/card-post";
import CardComments from "components/card-comments";
const uuidv4 = require('uuid/v4');


const PostWrapper = styled.div`
  width: 100%;
`;

class Post extends Component {
  state = {
    post: [],
    comments: []
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

    return (
      <PostWrapper>
        {post && <CardPost post={post} />}
        
        <div>
          <span>Edit</span> |
          <span>Delete</span>
        </div>

        {comments && <CardComments
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