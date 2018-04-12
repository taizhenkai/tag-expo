import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import {
  SocialIcon,
  Header,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Avatar,
  Button,
  Divider
} from 'react-native-elements';

export default class test extends Component {
  
  render() {
    const {
      logolStyle,
      formStyle,
      socialLoginStyle,
      loginButtonStyle,
      forgotPasswordStyle,
      dividerStyle,
      signupStyle
    } = styles;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* <Header
          centerComponent={{ text: 'Login', style: { color: '#fff' } }}
        /> */}
        <View style={logolStyle}>
          <Avatar
            xlarge
            rounded
            source={require('./sample_image/caveman.jpg')}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>

        <View style={formStyle}>
          <FormLabel>Username</FormLabel>
          <FormInput placeholder="cavman@gmail.com" autoCorrect={false} />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}

          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry={true} />
          {/* <FormValidationMessage>{'This field is required'}</FormValidationMessage> */}

          <Button
            style={loginButtonStyle}
            backgroundColor='#44B3EE'
            title='Sign in'
            borderRadius={30} />

          <Button
            style={forgotPasswordStyle}
            backgroundColor='#FFFFFF'
            color='#000000'
            title='Forgot your password?'
            fontSize={12}
            borderRadius={30} />
        </View>

        <Divider style={dividerStyle} />

        <View style={socialLoginStyle}>
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
          />
          <SocialIcon
            title='Sign In With Google'
            button
            type='google-plus-official'
          />
        </View>

        <View style={signupStyle}>
          <Text>Don't have an account?</Text>
          <Button
            style={forgotPasswordStyle}
            backgroundColor='#ffffff'
            color='#44B3EE'
            title='Sign up here'
            fontSize={14}
            borderRadius={30} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logolStyle: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 5
  },
  formStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  socialLoginStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  loginButtonStyle: {
    marginTop: 10,
  },
  forgotPasswordStyle: {
    alignItems: 'flex-end'
  },
  dividerStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'gray'
  },
  signupStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
