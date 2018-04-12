import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  Switch,
  Image

} from 'react-native';
import {
  FormInput,
  Icon,
  Button,
  Avatar
} from 'react-native-elements';
import Colors from '../constants/Colors';


export default class Register extends Component {
  render() {

    const {
      container,
      signinStyle,
      cardStyle,
      inputStyle,
      cardSection,
      policySection,
      policyStyle,
      switchStyle,
      registerBtnStyle,
      iconStyle
    } = styles;

    return (
      <ImageBackground
        style={container}
        source={require('./images/signup_background.png')} >

        <Text style={signinStyle}>
          Sign up
          </Text>

        <View style={cardStyle}>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Name" onChangeText={this.passwordValueChanged}
              autoCorrect={false} placeholderTextColor={Colors.whiteColor} />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/name_icon.png')}
            />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="E-mail" onChangeText={this.passwordValueChanged}
              autoCorrect={false} placeholderTextColor={Colors.whiteColor} keyboardType="email-address" />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/email_icon.png')}
            />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Idenfication Number" onChangeText={this.passwordValueChanged}
              autoCorrect={false} placeholderTextColor={Colors.whiteColor} />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/identification_icon.png')}
            />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Gender" onChangeText={this.passwordValueChanged}
              autoCorrect={false} placeholderTextColor={Colors.whiteColor} />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/gender_icon.png')}
            />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Birthday" onChangeText={this.passwordValueChanged}
              autoCorrect={false} placeholderTextColor={Colors.whiteColor} />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/birthday_icon.png')}
            />
          </View>

          <View style={cardSection}>
            <TextInput style={inputStyle} placeholder="Password" onChangeText={this.passwordValueChanged}
              secureTextEntry={true} autoCorrect={false} placeholderTextColor={Colors.whiteColor} />
            <Image
              style={iconStyle}
              source={require('./images/signup_icons/password_icon.png')}
            />
          </View>

          <View style={policySection}>
            <Text style={policyStyle}>Terms of use & Privacy Policy</Text>
            <Switch style={switchStyle} />
          </View>

          <Button
            style={registerBtnStyle}
            title="SIGN UP"
            onPress={this.loginBtnDidPressed}
            backgroundColor={Colors.buttonBackgroundColor}
            borderRadius={30}
          />

        </View >




      </ImageBackground>
    );
  }
}

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
  cardStyle: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ffffff99',
    borderRadius: 10,
    flexWrap: 'wrap'
  },
  inputStyle: {
    width: '80%',
    height: '100%',
    marginLeft: 20,
    fontStyle: 'italic'
  },
  cardSection: {
    height: 40,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  policySection: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  policyStyle: {
    fontSize: 12,
    color: 'white',
    fontStyle: 'italic',
    margin: 10,
    flex: 6,
  },
  switchStyle: {
    transform: [{ scaleX: .6 }, { scaleY: .6 }],
    margin: 10,
    flex: 1
  },
  registerBtnStyle: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: -15
  },
  iconStyle: { 
    width: 20, 
    height: '100%', 
    alignContent: 'center', 
    resizeMode: 'contain' 
  }

});