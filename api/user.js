import base64 from 'base-64';
import {CancelToken, create} from 'apisauce';

const base ="https://cae-bootstore.herokuapp.com/";

export const apiClientNoAuth = (CancelToken) => create({
    baseURL: base,
    CancelToken: CancelToken,
})

export const apiClientBasicAuth = (email, password,CancelToken) => create({
    baseURL: base,
    CancelToken: CancelToken,
    headers: {
        Authorization: 'Basic ' + base64.encode(email + ':' + password)
    }
})

export const apiClientTokenAuth = (token,CancelToken) => create({
    baseURL: base,
    CancelToken: CancelToken,
    headers: {
        Authorization: 'Bearer ' + token
    }
})


