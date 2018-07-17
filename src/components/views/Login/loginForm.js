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

  updateInput = (name, value) => {
    this.setState({
      hasErrors:false
    })

    let formCopy = this.state.form
    formCopy[name].value = value

    this.setState({
      form: formCopy
    })
  }

  render(){
    return(
      <View>
        <Input
          placeholder="Enter your Email"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          onChangeText={ value => () => this.updateInput('email', value)}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
        />

        <Input
          placeholder="Enter your Email"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={ value => () => alert('password!')}
          secureTextEntry

        />

        <View>
          <Button
            title='login'
            color='#fd9727'
            onPress={() => alert('action')}
          />
        </View>

        <View>
          <Button
            title='Ill do it later'
            color='lightgrey'
            onPress={() => alert('do it later')}
          />
        </View>
      <Text>Hello</Text>
    </View>
    )
  }
}

export default LoginForm;
