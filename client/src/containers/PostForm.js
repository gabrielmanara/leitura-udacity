import React, { Component } from 'react';
import styled from "styled-components";
import InputField from "components/input-field";
import { connect } from "react-redux";
import * as categoriesActions from 'actions/categories';
import * as postsActions from 'actions/posts';
import ButtonDefault from "components/btn-default";
import { isNil } from "lodash";
const uuidv4 = require('uuid/v4');

const Form = styled.div`
  width: 50%;
`;

class PostForm extends Component {
  state = {
    author: "",
    title: "",
    body: ""
  }

  componentDidMount() {
    this.props.getAllCategories();
    
    this.setState({
      ...this.props.post
    })
  }

  handleChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  submitPost = async() => {
    // If new post
    if (isNil(this.props.handleUpdate)) {
      const id = uuidv4();
      
      return this.props.newPost({
        ...this.state,
        id: id,
        timestamp: Date.now()
      }).then(() => {
        this.props.history.push(`/posts/${id}`)
      });
    }

    // if not update the existing 
    const id = this.props.post.id;
    return this.props.handleUpdatePost(id, this.state).then(() => {
      this.props.handleUpdate();
    })
  }

  render() {
    const { categories } = this.props;

    return (
      <Form>
        <InputField
          type="select"
          label="Category"
          nameKey="category"
          value={this.state.category}
          options={categories}
          updateInput={this.handleChange}
        />

        <InputField 
          type="text"
          label="Author"
          nameKey="author"
          value={this.state.author}
          updateInput={this.handleChange}
        />

        <InputField 
          type="text"
          label="Title"
          nameKey="title"
          value={this.state.title}
          updateInput={this.handleChange}
        />

        <InputField
          type="textarea"
          label="Post"
          nameKey="body"
          value={this.state.body}
          updateInput={this.handleChange}
        />

        <ButtonDefault 
          handle={this.submitPost}
          title="I'm ready to publish"/>
      </Form>
    )
  }
}

const mapDispatchToProps = {
  ...categoriesActions,
  ...postsActions,
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);