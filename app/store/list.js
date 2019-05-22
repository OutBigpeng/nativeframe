import { observable, flow } from 'mobx';
import Request from '../utils/request';
import apiURL from '../utils/apiURL';
const { news } = apiURL;
class ListStore {
    @observable list = [{ name: '111', desc: '2222', time: 'sss', id: '222' }];
    @observable isRefreshing = false;
    @observable page = 1;
    @observable isNoMore = true;
    @observable isFetching = false;
 

 
    // @action
    // fetchList = async (keyword) => {
    //     try {
    //         this.isFetching = true;
    //         if (this.isRefreshing)
    //             this.page = 1;
    //         const URL = news.list;
    //         let bodyParams = {
    //             keyword: keyword
    //         }
    //         await Request.post(URL, bodyParams)
    //             .then(data => {
    //                 runInAction(() => {
    //                     this.list = data;
    //                 })
    //             }) 

    
    //     } catch (e) {
    //         console.log ('eee:',e);
    //         this.isFetching = false;
    //     }
    // }

    fetchList = flow(function* (keyword) {
        this.list = [];
        this.isFetching = true;
        try {
            if (this.isRefreshing)
                this.page = 1;
            const URL = news.list;
            let bodyParams = {
                keyword: keyword
            }
            yield Request.post(URL, bodyParams)
                .then(data => {
                    this.list = data;
                })

        } catch (error) {

        } finally {
            this.isFetching = false;
        }
    })

}
export default new ListStore(); 