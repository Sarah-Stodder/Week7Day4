// You will build an ES6 module like we did in class today and utilize apisauce to create API wrappers for the https://cae-bootstore.herokuapp.com/  


// You should wrap the endpoints for:
// GET /login
// POST /user
// PUT /user
// DELETE /user
// GET /book

// Make a file the invokes all these API wrappers and logs their output to the console.
import { apiClientBasicAuth,apiClientNoAuth ,apiClientTokenAuth} from "./user.js";


const endpoint1 = '/login';
const endpoint = '/user';

const getUser = async (email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).get(endpoint1);
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid Email or Password';
    } else {
        error = 'Oop Something went wrong!';
    }
    return { user, error };
}

const getLogin = async (email, password, CancelToken) => {
    let error;
    let user;

    const response = await apiClientBasicAuth(email, password, CancelToken).get(endpoint);
    if (response.ok) {
        user = response.data;
    } else if ( response.status === 401 ) {
        error = 'Invalid Email or Eassword';
    } else {
        error = 'Oop Something went wrong!';
    }
    return { user, error };
}

const postUser = async (data, CancelToken) => {
    let error;
   

    const response = await apiClientNoAuth(CancelToken).post(endpoint,data);
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const putUser = async (token, data, CancelToken) => {
    let error;

    const response = await apiClientTokenAuth(token,CancelToken).put(endpoint,data);
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const deleteUser = async (token, CancelToken) => {
    let error;
    

    const response = await apiClientTokenAuth(token, CancelToken).delete(endpoint);
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}

const apiBasicAuth = {
    getUser,
    getLogin,
    postUser,
    putUser,
    deleteUser
}

export default apiBasicAuth;