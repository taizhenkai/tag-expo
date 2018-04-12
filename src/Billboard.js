import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

export default class Billboard extends Component {

    render() {
        const {
            container,
            tabBarView,
            tabIcon,
            tabBarContainer
          } = styles;

        return (
            <View style={container}>

                {/* tab bar */}
                <View style={tabBarContainer}>
                    <View style={tabBarView}>
                        <Image
                            style={tabIcon}
                            source={require('./images/logol.png')}
                        />
                        <Image
                            style={tabIcon}
                            source={require('./images/logol.png')}
                        />
                        <Image
                            style={tabIcon}
                            source={require('./images/logol.png')}
                        />
                        <Image
                            style={tabIcon}
                            source={require('./images/logol.png')}
                        />

                    </View>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    tabBarContainer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    tabBarView: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignItems: 'center'

    },
    tabIcon: {
        width: 40,
        height: 40,
        backgroundColor: 'blue'
    }


});