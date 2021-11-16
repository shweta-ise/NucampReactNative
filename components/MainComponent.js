import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsitesInfoComponent';
import {Text , View, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Constants from 'expo-constants';

const DirectoryNavigator = createStackNavigator (
    {
        Directory: { screen : Directory},
        CampsiteInfo : {screen : CampsiteInfo }
    },
    {   initialRouteName: 'Directory',
        defaultNavigationOptions:
        {
            headerStyle:
            {
                backgroundColor : '#5637DD'
            },
            headerTintColor : '#ffff',
            headerTitleStyle :
               {
                color:'#ffff'
               }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);


class Main extends Component {
   


    render() {
        return (
        <View 
            style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
        <AppNavigator/>    
        </View>
        );
    }
}

export default Main;