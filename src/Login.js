import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput
} from 'react-native';
import {
  SocialIcon,
  Button
} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  facebookLogin
} from './actions';
import Colors from '../constants/Colors';
// import RootNavigation from '../navigation/RootNavigation';

export class Login extends Component {
  emailValueChanged(text) {
    this.props.emailChanged(text);
  }

  passwordValueChanged(text) {
    this.props.passwordChanged(text);
  }

  loginBtnDidPressed() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });

    Actions.RootNavigation();
    // <RootNavigation />
  }

  forgotPasswordDidPressed() {
    Actions.ForgotPasswordScreen();
  }

  facebookBtnDidPressed() {
    this.props.facebookLogin();
  }

  // componentWillMount() {
  //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  // }

  // componentWillUnmount() {
  //   this.keyboardDidShowListener.remove();
  //   this.keyboardDidHideListener.remove();
  // }

  // _keyboardDidShow() {
  //   // alert('Keyboard Shown');
  //   console.log('Keyboard Shown')
  // }

  // _keyboardDidHide() {
  //   // alert('Keyboard Hidden');
  //   console.log('Keyboard Hidden')
  // }

  render() {

    const {
      container,
      signinStyle,
      inputBackgroundStyle,
      inputStyle,
      inputContainerStyle,
      orStyle,
      socialLoginContainer,
      loginBtnStyle,
    } = styles;

    return (
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground
          style={container}
          source={require('./images/signin_background.png')} >

          <Text style={signinStyle}>
            Sign in
          </Text>

          <View style={inputContainerStyle} >

            <View style={inputBackgroundStyle}>
              <TextInput style={inputStyle} placeholder="E-mail" onChangeText={this.emailValueChanged.bind(this)}
                autoCorrect={false} value={this.props.email} placeholderTextColor={Colors.placeholderColor} keyboardType="email-address"/>
            </View>

            <View style={inputBackgroundStyle}>
              <TextInput style={inputStyle} placeholder="Password" onChangeText={this.passwordValueChanged.bind(this)}
                secureTextEntry={true} autoCorrect={false} value={this.props.password} placeholderTextColor={Colors.placeholderColor}/>
            </View>


            <Text style={orStyle} >
              OR
                </Text>

            <View style={socialLoginContainer}>
              <SocialIcon
                title='SIGN IN WITH FACEBOOK'
                button
                type='facebook'
                onPress={this.facebookBtnDidPressed.bind(this)}
              />
              <SocialIcon
                title='SIGN IN WITH GOOGLE'
                button
                type='google-plus-official'
              />
            </View>

            <Button
              backgroundColor='transparent'
              color='white'
              title='Forgot password?'
              onPress={this.forgotPasswordDidPressed}
              fontSize={12} />
          </View>

          <Button
            style={loginBtnStyle}
            icon={{ name: 'keyboard-arrow-right' }}
            onPress={this.loginBtnDidPressed.bind(this)}
            backgroundColor={Colors.buttonBackgroundColor}
          />
        </ImageBackground>
      </ScrollView>
      // </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, facebookLogin })(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  signinStyle: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 65,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  inputContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputBackgroundStyle: {
    backgroundColor: '#f4f4f499',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    borderRadius: 30,
  },
  inputStyle: {
    height: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  orStyle: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white'
  },
  socialLoginContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
  loginBtnStyle: {
    marginLeft: -20,
    marginRight: -20,
  }
});