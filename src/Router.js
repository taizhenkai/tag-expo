import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Login from './Login'
import Welcome from './Welcome'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
// import Billboard from './Billboard'
import RootNavigation from '../navigation/RootNavigation'

const RouterComponent = () => {
    const renderBackButton = () => {
        return (
            <View>
            </View>

        );
    };



    return (
        <Router>
            <Stack key='root' titleStyle={{ color: "#FFF" }} navTransparent navBarButtonColor='#fff'>
                <Scene key='WelcomeScreen' component={Welcome} title="" hideNavBar initial/>
                <Scene key='LoginScreen' component={Login} title="TEAR AND GRAB" />
                <Scene key='RegisterScreen' component={Register} title="TEAR AND GRAB" />
                <Scene key='ForgotPasswordScreen' component={ForgotPassword} title="TEAR AND GRAB" />
                <Scene key='RootNavigation' component={RootNavigation} title="" renderBackButton={() => renderBackButton()} />

            </Stack>


        </Router>
    );
};

export default RouterComponent;