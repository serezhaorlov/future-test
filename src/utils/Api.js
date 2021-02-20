import { apiObj } from './constants';

class Api {
    constructor( { baseSmall, baseBig, headers }){
        this.baseSmall = baseSmall;
        this.headers = headers;
        this.baseBig = baseBig;
    }

    getUsers(url){
        if( url === 'small'){
            return fetch(this.baseSmall, {
                method: 'GET',
                headers: this.headers,
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('error')
            });
        }
        if(url === 'big'){
            return fetch(this.baseBig, {
                method: 'GET',
                headers: this.headers,
            })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject('error')
            });
        }
        else {
            return Promise.reject('error')
        }
    }

}

export const api = new Api(apiObj)
