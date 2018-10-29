import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, Glyphicon, ControlLabel } from 'react-bootstrap';
import '../styles/App.css';

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  validateForm = () => {
    const emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    const passwordValid = this.state.password.length > 6;
    this.setState({
      emailValid,
      passwordValid
    })
  }

  handleUsersInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, this.validateForm)
  }

  render() {
    return (
      <Form horizontal className='mt9x' onSubmit={this.onFormSubmit}>
        <fieldset>
          <Col smOffset={4} sm={6}>

            <FormGroup>
              <Col sm={8}><h3 className='text-left text-gray'>Sign in</h3></Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalEmail' validationState={!this.state.emailValid ? 'error' : 'success'}>
              <Col sm={8}>
                <FormControl className='input-line'
                             type='email'
                             name='email'
                             placeholder='Email Address'
                             autoCapitalize='off'
                             autoCorrect='off'
                             value={this.state.email}
                             onChange={this.handleUsersInput}/>
                <FormControl.Feedback/>
                {!this.state.emailValid ? (<ControlLabel>Your email is incorrect</ControlLabel>) : null}
              </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'
                       validationState={!this.state.passwordValid ? 'error' : 'success'}>
              <Col sm={8}>
                <FormControl className='input-line'
                             type='password'
                             name='password'
                             placeholder='Password'
                             value={this.state.password}
                             onChange={this.handleUsersInput}/>
                <FormControl.Feedback/>
                {!this.state.passwordValid ? <ControlLabel>Your password is incorrect</ControlLabel> : null}
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={8} className='mt6x'>
                <button className='flat-button border-gray'
                        type='submit'
                        disabled={!this.state.emailValid || !this.state.passwordValid}
                        onClick={this.props.handleLogin}>Next
                  <Glyphicon className='pl2x' glyph='menu-right'/>
                </button>
              </Col>
            </FormGroup>
          </Col>
        </fieldset>
      </Form>
    );
  }
}

export default LoginForm;
