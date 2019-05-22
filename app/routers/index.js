
import React, { Component } from 'react';
import {
    Router,
    Scene,
    Actions
} from 'react-native-router-flux';
import { BackHandler } from 'react-native';
import { Toast, Icon } from 'native-base';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ProfileForm from '../pages/ProfileForm';
import BasicLayout from '../layout/BasicLayout';
import BasicLayoutNoBack from '../layout/BasicLayoutNoBack';
import BasicLayoutWithRightBtn from '../layout/BasicLayoutWithRightBtn';

class Routers extends Component {
    constructor(props) {
        super(props);
    }
    onBackPress = () => {
        console.log('Actions:', Actions);
        if (Actions.state.index !== 0) {
            return false
        }
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            BackHandler.exitApp();
            return false;
        }
        this.lastBackPressed = Date.now();
        //轻提示模拟器不好用，试试真机 不行就换插件
        Toast.show({
            text: '再按一次退出应用',
            buttonText: "确认",
        });
        return true
    }
    render() {
        const tabsProp = {
            activeBackgroundColor: '#749df6',  //选中的背景颜色
            activeTintColor: '#b1b1b1', //文字和标签的默认颜色
            // inactiveBackgroundColor: '',
            // inactiveTintColor: '',
            // indicatorStyle: '',
            // labelStyle: '',
            tabBarPosition: 'bottom', //方向
        }
        return (
            <Router backAndroidHandler={this.onBackPress} hideNavBar >
                <Scene key="root" hideNavBar tabs  {...tabsProp} initial  >
                    <Scene
                        key={'home'} 
                        component={(props)=> 
                                <BasicLayout {...props} title={'主页'}>
                                    <Home  {...props} />
                                </BasicLayout>
                            } 
                        hideNavBar
                        icon={({ tintColor, focused }) => {
                            return <Icon type="FontAwesome" name="home" />
                        }}
                        tabBarLabel={'主页'}
                    />
                    <Scene
                        key={'profile'}
                        path={"/profile/:id/"}
                        component={(props)=> 
                            <BasicLayoutNoBack {...props} title={'消息'}>
                                <Profile  {...props} />
                            </BasicLayoutNoBack>
                        }  
                        hideNavBar
                        icon={({ tintColor, focused }) => {
                            return <Icon type="MaterialIcons" name="message" />
                        }}
                        tabBarLabel={'消息'}
                    />
                    <Scene
                        key={'profileForm'}
                        path={"/edit/profile/:id/"}
                        component={(props)=> 
                            <BasicLayoutWithRightBtn {...props} title={'个人中心'}  rightBtnPress={()=>alert('个人中心')} iconProps={{name:'ios-home',type:'Ionicons',color:'#fff'}} >
                                <ProfileForm  {...props} />
                            </BasicLayoutWithRightBtn>
                        }   
                        hideNavBar
                        icon={({ tintColor, focused }) => {
                            return <Icon type="FontAwesome" name="user" />
                        }}
                        tabBarLabel={'我的'}
                    />
                </Scene>
            </Router>
        )
    }
}
export default Routers