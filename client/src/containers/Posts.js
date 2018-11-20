import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from 'actions/posts';
import Card from "components/card-short-post";

class Posters extends Component {

  state = {
    listOfPosts: {}
  }

  votePost = (type, id) => {
    this.props.handleVote({
      id: id,
      vote: { option: type }
    })
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      listOfPosts: nextProps.allPosts,
    });
  };

  applyFilters(posts) {
    // Filter by category if it's needed
    const { category } = this.props.match.params;
    
    if (typeof category !== 'undefined') {
      posts = Object.keys(posts)
        .filter(post => {
          return posts[post].category === category
        })
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: posts[key]
          };
        }, {});
    }

    return posts;
  }

  renderCards = () => {
    const posts = this.applyFilters(this.state.listOfPosts);

    return Object.keys(posts).map((key) => {
      return <Card
        key={key}
        votePost={this.votePost}
        post={posts[key]} />
    })
  }

  render() {
    return (
      <div>
        {this.renderCards().length > 0 && this.renderCards()}
        {!this.renderCards().length > 0 && 
          (
            <div>No posts related with this category</div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allPosts: state.posts.allPosts
  }
}

export default connect(mapStateToProps, actionCreators)(Posters);
