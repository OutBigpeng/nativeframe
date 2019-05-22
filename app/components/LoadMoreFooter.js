
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ActivityIndicator,
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class LoadMoreFooter extends Component {
    static propTypes = {
        isNoMore: PropTypes.bool,
    }

    static defaultProps = {
        isNoMore: false
    }

    render() {
        let { noMessage ='- 没有更多的数据了 -',yesMessage='正在加载更多的数据...' } =this.props;
        const {isNoMore} = this.props;
        const title = isNoMore ? noMessage : yesMessage

        return (
            <View style={styles.loadingContainer}>
                {!isNoMore && <ActivityIndicator />}
                <Text style={styles.title}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 14,
        marginLeft: 5,
        color: 'gray'
    }
})
