import  apiBasicAuth  from './api/apiBasicAuth.js'
import { CancelToken } from 'apisauce'
import  apiBook from './api/book.js'
import {sarEmail, sarPass, sarToken, throwToken} from './hidden/hidden.js'

const source = CancelToken.source()
// source.token returns the cancel token

const login = async (cancelToken)=>{
    const {user, error} = await apiBasicAuth.getUser(sarEmail, sarPass, cancelToken )
    console.log(error?error:"It works")
    console.log(user)

}


const register = async (cancelToken) =>{
    const newU = {
        "email":"s@email.com",
        "first_name":"srah",
        "last_name":"stodder",
        "password":"mypass"
    }
    const {error} = await apiBasicAuth.postUser(newU, cancelToken )
    console.log(error?error:"It works")
    
}

const editUser = async (cancelToken) =>{
    let change={
            "last_name": "Reddots"
        }
    const {error} = await apiBasicAuth.putUser(sarToken,change, cancelToken )
    console.log(error?error:"It works")
   
}

const deleteUser = async (cancelToken) =>{
    const {error} = await apiBasicAuth.deleteUser(throwToken, cancelToken )
    console.log(error?error:"It works")
    
}

const book= async (cancelToken) =>{
    const {error, books} = await apiBook.getBook(cancelToken)
    console.log(error?error:"It works")
    console.log(books)
}

login(source.sarToken) //works!
//register(source.token) //works!
//editUser(source.sarToken) //works!
//deleteUser(source.throwToken)//works!
//book(source.token) //works!