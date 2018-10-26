import React, { Component } from 'react'

export default class ButtonDefault extends Component {
  render() {
    const { title, handle, value } = this.props;
    return (
      <button 
        value={value}
        onClick={event => handle(value)}>
        {title}
      </button>
    )
  }
}
