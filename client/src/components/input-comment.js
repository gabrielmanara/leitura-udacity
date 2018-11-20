import React, { Component } from 'react';
import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default class InputComment extends Component {

  state = {
    author: "",
    comment: ""
  }

  handleInput = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = () => {
    this.props.insertNewComment(this.state);
    this.setState({
      author: "",
      comment: ""
    })
  }

  render() {
    return (
      <div>
        <FormGroup>
          <label htmlFor="author">Author</label>
          <input 
            name="author" 
            type="text"
            value={this.state.author}
            onChange={event => this.handleInput("author", event.target.value)}  />
        </FormGroup>
        <FormGroup>
          <label htmlFor="comment">Comment</label>
          <textarea 
            value={this.state.comment}
            onChange={event => this.handleInput("comment", event.target.value)}>
          </textarea>
        </FormGroup>
        <FormGroup>
          <button onClick={() => this.handleSubmit()}>Save</button>
        </FormGroup>
      </div>
    )
  }
}
