/**
 * 封装常用的请求
 */
import RNFetchBlob from 'react-native-fetch-blob';
import Toast from '@remobile/react-native-toast';
import Platform from './platform';
import userStore from '../store/user';
const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const errortext = codeMessage[response.status] || response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};

const Request = {
    /**
     * url 请求路径
     */
    get: (url) => {
        var header = {
            'Content-Type': 'application/json',
            Authorization: userStore.user.token,  //请求接口令牌
            apiVersion: Platform.version
        }
        return RNFetchBlob.fetch('GET', url, header)
            .then(response => response.json())
            .catch((errorMessage, statusCode) => {
                console.log('statusCode', statusCode);
                Toast.showShortBottom(errorMessage);
            })
        // .catch(error => Toast.showShortBottom(error.message));
    },
    /**
     * url 请求路径
     * body 请求的参数
     */
    post: (url, body) => { 
        //如果用户已经登录，每次请求带上用户ID
        if (!('user_id' in body) && userStore.user.userId)
            body.user_id = userStore.user.userId;
        var header = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: userStore.user.token,  //请求接口令牌
                // apiVersion: Platform.version
            },
            body: JSON.stringify(body)
        }
        return fetch(url, header) 
            .then(checkStatus)
            .then(response => response.json())
            .catch((error) => {
                if (error.message && error.message == 'Network request failed') {
                    error.message = '网络请求失败';
                }
                Toast.showShortBottom(error.message);
                throw error;
            })
        // return RNFetchBlob.fetch('POST', url, header, [])
        //      .then((response)=>{
        //          console.log('responseresponse:',response)
        //          return response;
        //      })
        //     .then(response => response.json())
        //     .catch((errorMessage, statusCode) => {
        //         console.log('statusCode', statusCode);
        //         console.log('errorMessage', errorMessage);
        //         // Toast.showShortBottom(errorMessage);
        //     });
    },
    /**
     * 文件上传，支持多文件上传
     * {
            name:`file${index}`,   //名称标识
            data:item.props.imageData.data,  //二进制
            type:item.props.imageData.type,  //文件的类型
            filename:item.props.imageData.fileName  //文件名称
        }
     * url 请求路径
     * body 请求的参数
     * uploadProgress 上传进度
     * successCallBack 上传成功
     * failCallBack 上传失败
     */
    upload: (url, body, uploadProgress, successCallBack, failCallBack) => {
        //如果用户已经登录，每次请求带上用户ID
        if (!('user_id' in body) && userStore.user.userId)
            body.user_id = userStore.user.userId;
        return RNFetchBlob.fetch('POST', url, {
            'Content-Type': 'multipart/form-data',
            Authorization: userStore.user.token,  //请求接口令牌
        }, body)
            .uploadProgress((written, total) => {
                let perent = written / total;
                uploadProgress(perent);
            })
            .progress((received, total) => {
                let perent = received / total;
                uploadProgress(perent);
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                successCallBack(response);
            })
            .catch((error) => {
                // if (error.message && error.message == 'Network request failed') {
                //     error.message = '网络请求失败';
                // }
                if (failCallBack && typeof (failCallBack) === 'function') {
                    failCallBack(error);
                }
                else {
                    Toast.showShortBottom(error.message)
                }
            });
    }
}


export default Request;