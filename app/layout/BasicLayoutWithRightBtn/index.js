

import React, { Component, } from 'react';
import {
    Container,
    Header,
    Content,
    Body,
    Title,
    Icon,
    Left,
    Right,
    Button,
} from "native-base";
import LeftBack from '../LeftBack';
/**
 *   调用方法 <BasicLayoutWithRightBtn  title={'标题'} rightBtnPress={()=>{}} iconProps={{name:'ios-home',type:'Ionicons',color:'#ddd'}}  >内容组件</BasicLayoutWithRightBtn>
 */
class BasicLayoutWithRightBtn extends Component {
    render() {
        const { rightBtnPress, iconProps, children, title } = this.props;
        return (
            <Container>
                <Header  >
                    <Left style={{ flex: 0 }} >
                        <LeftBack />
                    </Left>
                    <Body style={{ alignSelf: 'center', alignItems: 'center', flex: 1 }}>
                        <Title>{title}</Title>
                    </Body>
                    <Right style={{ flex: 0 }} >
                        <Button transparent onPress={() => rightBtnPress()}>
                            <Icon  {...iconProps} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    {children}
                </Content>
            </Container>
        )
    }
}

export default BasicLayoutWithRightBtn