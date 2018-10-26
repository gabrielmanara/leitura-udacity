import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from 'actions/posts';

class Categories extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(this.props.match.params.category)
  }
  render() {
    console.log(this.props.match.params.name)
    return (
      <div>
        Categories
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pos: state.posts.allPosts,
  }
}

export default connect()(Categories);