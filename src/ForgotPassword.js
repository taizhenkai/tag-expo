import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  View,
  TextInput
} from 'react-native';
import {
  FormInput,
  Button
} from 'react-native-elements';
import {
  resetEmailChanged,
} from './actions'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';


export class ForgotPassword extends Component {
  emailValueChanged(text) {
    this.props.resetEmailChanged(text);
  }


  render() {

    const { container,
      inputBackgroundStyle,
      inputStyle,
      inputContainerStyle,
      resetBtnStyle } = styles;

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground
          style={container}
          source={require('./images/signin_background.png')} >
          <View style={inputContainerStyle}>
            <View style={inputBackgroundStyle}>
              <TextInput style={inputStyle} placeholder="E-mail" onChangeText={this.emailValueChanged.bind(this)}
                autoCorrect={false} value={this.props.email} placeholderTextColor={Colors.placeholderColor} keyboardType="email-address"/>
            </View>
          </View>

          <Button
            style={resetBtnStyle}
            icon={{ name: 'keyboard-arrow-right' }}
            backgroundColor= {Colors.buttonBackgroundColor}
          />

        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    resetEmail: state.auth.resetEmail
  };
};

export default connect(mapStateToProps, { resetEmailChanged })(ForgotPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  inputBackgroundStyle: {
    backgroundColor: '#f4f4f499',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  resetBtnStyle: {
    marginLeft: -20,
    marginRight: -20,
  }
});