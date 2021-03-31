import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { input } from './InputControl'
import { formValidatorHelper } from './FormValidator.js'
import './App.css'
class SimpleForm extends Component {
  render() {
    const { handleSubmit, reset, pristine, submitting, valid } = this.props

    return (
      <div>
        <form id="frm" onSubmit={handleSubmit((values) => console.log(values))}>
          <div id="i2">
            <h2>Redex Form</h2>
          </div>
          <br />
          <br />
          <label>First Name :</label>
          <br />
          <br />
          <Field
            name="firstName"
            type="text"
            component={input}
            id="first-name"
            placeholder="enter your first name"
          />
            <br />
          <br />
          <label>Last Name :</label>
          <br />
          <br />
          <Field
            name="lastName"
            type="text"
            component={input}
            id="last-name"
            placeholder="enter your last name"
          />
            <br />
          <br />
          <label>Contact Number :</label>
          <br />
          <br />
          <Field
            name="CNumber"
            type="number"
            component={input}
            id="last-name"
            placeholder="Contact Number"
          />
            <br />
          <br />
          <label>Email Address :</label>
          <br />
          <br />
          <Field
            name="email"
            type="text"
            component={input}
            id="email"
            placeholder="enter your email"
          />
            <br />
          <br />
          <button type="submit" disabled={!valid || pristine || submitting}>
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={reset}>
            reset
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SimpleForm',
  validate: formValidatorHelper,
})(SimpleForm)
