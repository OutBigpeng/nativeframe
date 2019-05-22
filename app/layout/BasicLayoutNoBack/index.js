/**
 * 没有返回按钮，只有标题
 */
import React, { Component, } from 'react';
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
import PropTypes from 'prop-types';
/**
 * 调用方法 <BasicLayoutNoBack title={'标题'} >内容组件</BasicLayoutNoBack>
 */
class BasicLayoutNoBack extends Component { 
    render() {
        const { title,children} = this.props;
        return (
            <Container>
                <Header> 
                    <Body style={{ alignSelf: 'center', alignItems: 'center', flex: 1 }}>
                        <Title>{title}</Title>
                    </Body> 
                </Header>
                <Content padder>
                    {children}
                </Content>
            </Container>
        )
    }
} 
export default BasicLayoutNoBack