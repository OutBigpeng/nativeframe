
import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text, 
  StatusBar,
} from 'react-native';
import { Provider } from 'mobx-react/native';
import store from './app/store';
import { Root, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Routers from './app/routers';
// import NetInfoDecorator from './app/components/NetInfoDecorator';
import Platform from './app/utils/platform';

const { platform,isIphoneX } = Platform;
console.disableYellowBox = true;

// @NetInfoDecorator
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promptPosition: new Animated.Value(0),
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   const { isConnected } = nextProps
  //   // 无网络
  //   if (!isConnected) {
  //     Animated.timing(this.state.promptPosition, {
  //       toValue: 1,
  //       duration: 200
  //     }).start(() => {
  //       setTimeout(() => {
  //         Animated.timing(this.state.promptPosition, {
  //           toValue: 0,
  //           duration: 200
  //         }).start()
  //       }, 2000);
  //     })
  //   }
  // }


  render() {
  //   let padd =  36 //isIphoneX ? 36: ( platform === 'ios' ? 20 :0 );
  //   let positionY = this.state.promptPosition.interpolate({
  //     inputRange: [
  //         0, 1
  //     ],
  //     outputRange: [
  //         -30,padd
  //     ]
  // });
    return (
      <Provider {...store} >
        <StyleProvider style={getTheme(material)}>
          <Root>
            <Routers />
          </Root>
        </StyleProvider>
        {/* <Animated.View style={[
            styles.netInfoView, {
              top: positionY
            }
          ]}>
            <Text style={styles.netInfoPrompt}>网络异常，请检查网络稍后重试~</Text>
          </Animated.View> */}
      </Provider>
    );
  }
}



// const styles = StyleSheet.create({
//   netInfoView: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 30,
//       position: 'absolute',
//       right: 0,
//       left: 0,
//       backgroundColor: 'rgb(217, 51, 58)'
//   },
//   netInfoPrompt: {
//       color: 'white',
//       fontWeight: 'bold'
//   }
// });
