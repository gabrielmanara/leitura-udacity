import React, { Component } from 'react';
import styled from "styled-components";
import InputField from "components/input-field";
import { connect } from "react-redux";
import * as categoriesActions from 'actions/categories';
import * as postsActions from 'actions/posts';
import ButtonDefault from "components/btn-default";
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
  }

  handleChange = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  submitPost = () => {
    const id = uuidv4();
    this.props.newPost({
      ...this.state,
      id: id,
      timestamp: Date.now()
    }).then(() => {
      this.props.history.push(`/posts/${id}`)
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