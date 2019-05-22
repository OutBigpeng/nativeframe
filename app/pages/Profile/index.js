import React, { Component } from 'react';

import {
    Container,
    Header,
    Content,
    Textarea,
    Form,
    Body,
    Title,
    Toast,
    Icon,
    Left,
    Right,
    Button,
    Text
} from "native-base";
import {Actions}  from 'react-native-router-flux';
export default class Home extends Component {

    render() {
        return (
            <Container>
                <Header  >
                    <Left style={{ flex:0 }} >
                        <Button transparent  onPress={()=>Actions.pop()} >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    {/* <Left  >
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left> */}
                    <Body style={{ alignSelf: 'center', alignItems: 'center',flex:1}}>
                        <Title>Transparent</Title>
                    </Body>
                    <Right style={{flex:0 }} /> 
                </Header>
                <Content padder>
                    <Text>
                        Header with transparent prop
                    </Text>
                </Content>
            </Container>
        )
    }
}