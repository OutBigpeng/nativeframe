import React, { Component } from 'react'; 
import {
    Button,
    Icon
} from "native-base";
import {Actions}  from 'react-native-router-flux';
const LeftBack = () => (
    <Button transparent onPress={() => Actions.pop()} >
        <Icon name="arrow-back" />
    </Button>
)

export default LeftBack;