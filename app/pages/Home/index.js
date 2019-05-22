import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button,H1, H2, H3, Text ,View } from 'native-base';
import { inject,observer } from 'mobx-react';
import { toJS } from 'mobx';
import LoadMoreFooter from '../../components/LoadMoreFooter';

@inject("userStore", "listStore")
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        const { userStore } = this.props;
        userStore.login();
    }
    componentDidMount() {
        let { listStore } = this.props;
        listStore.fetchList('22'); 
    }
    _itemPress = (item) => {
        console.log('item:',item);
        alert(item.id);
    }
    _renderRow = ({ item }) => <NewsItem {...item} onPress={this._itemPress} />

    _renderFooter = () => <LoadMoreFooter isNoMore={this.props.listStore.isNoMore} />

    _onRefresh = () => {
        this.props.listStore.isRefreshing = true;
        this.props.listStore.fetchList('');
    };

    _onEndReach = () => {
        if (!this.props.listStore.isNoMore)
            this.props.listStore.page++
    };

    render() {
        const { userStore, listStore } = this.props;
        let { list,isRefreshing } = listStore;
        return (
            <View style={{flex:1}}>
                <Text onPress={()=>{
                    
                    userStore.user.token='bbbbbbbbbbbbbbbbbb';
                    console.log('userStore:',userStore);
                }}>ssdd:{userStore.user.token}</Text>
             
                <FlatList
                    data={list}
                    renderItem={this._renderRow}
                    extraData={list}
                    keyExtractor={(item, index) => item.Id}
                    ListFooterComponent={this._renderFooter}
                    ItemSeparatorComponent={() => {
                        return (
                            <View
                                style={{
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    borderColor: '#c7cfe0',
                                }}
                            />
                        )
                    }}
                    initialListSize={10}
                    onEndReached={this._onEndReach}
                    onEndReachedThreshold={0.1}
                    onRefresh={this._onRefresh}
                    refreshing={isRefreshing}
                />
            </View>
        )
    }
}

const NewsItem =({id,name,desc,time,onPress})=>(
    <TouchableOpacity onPress={()=>onPress({id,name,desc,time})} style={{margin:10,backgroundColor:'#fff'}}>
        <H2>{name}</H2>
        <H3>{desc}</H3>
        <Text>{time}</Text>
    </TouchableOpacity>
)