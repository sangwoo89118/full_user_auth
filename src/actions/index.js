
import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){

    return dispatch =>{
        axios.post(`${BASE_URL}/signup`, cred).then(resp=>{
            console.log('Resp from Sign Up', resp);
            localStorage.setItem('token', resp.data.token)
            dispatch({ type: types.SIGN_Up });
        })

    }
}

export function signIn(cred){

    return dispatch =>{
        axios.post(`${BASE_URL}/signin`, cred).then(resp=>{
            console.log('Resp from Sign In', resp);
            localStorage.setItem('token', resp.data.token)

            dispatch({ type: types.SIGN_IN });
        }).catch(err => {
            dispatch({
                type: types.ERROR,
                payload: 'Invalid login information'
            })
        })
    }
}
