import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from 'actions/posts';
import Card from "components/card-post";

class Posters extends Component {

  state = {
    listOfPosts: []
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      listOfPosts: nextProps.allPosts,
    });
  };


  renderCards = () => {
    const { listOfPosts } = this.state;
    return Object.keys(listOfPosts).map((key) => {
      return <Card post={listOfPosts[key]} />
    })
  }

  render() {

    const { allPosts } = this.props;
    return (
      <div>
        Posters list
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allPosts: state.posts
  }
}

export default connect(mapStateToProps, actionCreators)(Posters);
