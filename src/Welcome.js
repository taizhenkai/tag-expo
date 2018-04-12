import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
    StatusBar
} from 'react-native';
import {
    SocialIcon,
    Button
} from 'react-native-elements';
import Router from './Router';
import  { Actions } from 'react-native-router-flux';
import Colors from '../constants/Colors';

export default class Welcome extends Component {
    createAccount() {
        Actions.RegisterScreen();
    }

    loginAccount() {
        Actions.LoginScreen();
    }


    render() {
        const {
          logolStyle,
            container,
            createAccountBtn,
            powerByStyle,
            powerCompanyFont,
            imageStyle
        } = styles;


        return (
            


            <ImageBackground
                style={container}
                source={require('./images/home_background.png')} >

                <StatusBar barStyle='light-content' />

                <View style={logolStyle}>
                    <Image
                        style={imageStyle}
                        source={require('./images/logol.png')}
                    />
                </View>

                <View style={createAccountBtn}>
                    <Button
                        rightIcon={{ name: 'keyboard-arrow-right' }}
                        title='CREATE ACCOUNT'
                        fontWeight= 'bold'
                        borderRadius={20}
                        onPress={this.createAccount}
                        backgroundColor={Colors.buttonBackgroundColor} />

                    <Button
                        backgroundColor='transparent'
                        fontSize={12}
                        title='Already have an account? Sign in now'
                        onPress={this.loginAccount} />

                </View>

                <Text style={powerByStyle}>
                    Powered by
                    <Text style={powerCompanyFont}> CAVMAN DIGITAL SOLUTION</Text>
                </Text>

            </ImageBackground >

        );

    }
}

const styles = StyleSheet.create({
    logolStyle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    imageStyle: {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    createAccountBtn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 100
    },
    powerByStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#ffffff',
        marginBottom: 10,
        fontSize: 10
    },
    powerCompanyFont: {
        fontSize: 12,
        fontFamily: 'Cochin'
    }

});