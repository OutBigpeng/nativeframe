import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
export default class Home extends Component {

    render(){
        return(
            <View >
                <Text>profileform</Text>
                <Button onPress={()=>Actions.login()}  >
                    <Text>跳转登录页面</Text>
                </Button>
            </View>
        )
    }
}   