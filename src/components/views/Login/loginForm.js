import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Input from '../../utils/forms/inputs';

class LoginForm extends Component {

  state = {
    form: {
      email: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isEmail: true
        }

      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          minLength: 6
        }

      },
      confirmPassword:{
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: "password"
        }
      }
    }
  }

  render(){
    return(
      <View>
        <Input
          placeholder="Enter your Email"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={ value => () => alert('hey')}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />

        <Input
          placeholder="Enter your Email"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={ value => () => alert('password!')}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />
      <Text>Hello</Text>
    </View>
    )
  }
}

export default LoginForm;
