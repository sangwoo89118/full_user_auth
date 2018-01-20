

import types from '../actions/types';


const DEFAULT_STATE = {
    auth: false,
    error: ''
}

export default (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_OUT:
            return { auth: true, error: ''};
        case types.ERROR:
            console.log('ACTION ERROR', action);
            return { auth: false, error: action.payload }
        default:
            return state;
    }
}
