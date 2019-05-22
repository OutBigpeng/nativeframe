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
import LeftBack from '../LeftBack';
/**
 * 调用方法 <BasicLayout title={'标题'} >内容组件</BasicLayout>
 */
export default class BasicLayout extends Component {

    render() {
        return (
            <Container>
                <Header  >
                    <Left style={{ flex:0 }} >
                        <LeftBack />
                    </Left>
                    <Body style={{ alignSelf: 'center', alignItems: 'center',flex:1}}>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right style={{flex:0 }} /> 
                </Header>
                <Content padder>
                    {this.props.children}
                </Content>
            </Container>
        )
    }
}
