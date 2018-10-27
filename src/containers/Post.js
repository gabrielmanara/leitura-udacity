import React, { Component } from 'react';
import { connect } from "react-redux";
import * as postActions from 'actions/posts';
import * as commentsActions from 'actions/comments';
import CardPost from "components/card-post";
import CardComments from "components/card-comments";
const uuidv4 = require('uuid/v4');

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
      <div>
        {post && <CardPost post={post} />}
        {comments && <CardComments
          updateValue={this.handleUpdateComment}
          insertNewComment={this.handleNewComment}
          comments={comments} />}
      </div>
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