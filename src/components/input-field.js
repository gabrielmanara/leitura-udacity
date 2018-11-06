import React, { Component } from 'react';
import styled from "styled-components";


const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  label {
    margin-bottom: 15px;
  }

  input,
  select,
  textarea {
    height: 40px;
    background: transparent;
    border: 0;
    box-shadow: 0px 3px 14px 5px rgba(0,0,0,.05);
  }

  textarea {
    height: auto;
    resize: none;
  }
`;

export default class InputField extends Component {
  render() {
    const { label, nameKey, value, type, options } = this.props;
  
    return (
      <FormGroup>
        <label htmlFor={nameKey}>{label}</label>

        {type === "text" && 
          <input
            onChange={(event) => this.props.updateInput(event.target.value, nameKey)}
            name={nameKey}
            value={value}
            type="text" />
        }

        {type === "textarea" &&
          <textarea
            onChange={(event) => this.props.updateInput(event.target.value, nameKey)}
            name={nameKey}
            value={value}
            rows="10"
            type="text" />
        }

        {type === "select" &&
          <select
            onChange={(event) => this.props.updateInput(event.target.value, nameKey)}
            name={nameKey} 
            value={value}>
            {Object.keys(options).map((key) => {
              return <option key={key} value={options[key].value}>{options[key].name}</option>
            })}
          </select>
        }

      </FormGroup>
    )
  }
}
