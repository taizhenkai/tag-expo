import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAILED,
    RESET_EMAIL_CHANGED
} from './types';
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

export const resetEmailChanged = (text) => {
    return {
        type: RESET_EMAIL_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    //async
    return (dispatch) => {
        //call api for login

        //on success
        //dispatch({type: 'LOGIN_USER_SUCCESS', payload: user });
    };

};

export const facebookLogin = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('fb_token');
        if (token) {
            //login success
            dispatch({
                type: FACEBOOK_LOGIN_SUCCESS,
                payload: token
            });
        } else {
            //start login process
            doFacebookLogin(dispatch);
        }
    }
};

const doFacebookLogin = async (dispatch) => {
    let result = await Facebook.logInWithReadPermissionsAsync(
        '149259592386637',
        { permissions: ['public_profile'] }
    );

    const { type, token } = result;

    if (type === 'cancel') {
        return dispatch({type: FACEBOOK_LOGIN_FAILED})
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token
    });

};