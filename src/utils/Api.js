
const apiObj = {
    baseSmall: 'https://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
    baseBig: 'https://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
    headers: {
      "content-type": "application/json"
    }
}

class Api {
    constructor( { baseSmall, baseBig, headers }){
        this.baseSmall = baseSmall;
        this.headers = headers;
        this.baseBig = baseBig;
    }

    getUserSmall(){
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
    getUsers(link){
        if( link === 'smallData'){
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
        if(link === 'bigData'){
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

    getUserBig(){
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
}

export const api = new Api(apiObj)
