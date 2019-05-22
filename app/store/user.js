import { observable,action} from 'mobx';

class UserStore {
    @observable user = {};

    @action 
    login= ()=>{
        this.user = {
            userId:'',
            userName:'test',
            token:'sssssssssssssssss'
        }
    }
}
export default new  UserStore(); 