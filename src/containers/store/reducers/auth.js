import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    // name: '',
    // nik:'',
    // citizen:'',
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const authStart = (state,action) => {
    return updateObject(state,{
        error: null,
        loading: true
    })
};

const authSuccess = (state,action) => {
    return updateObject(state,{
        error: null,
        loading: false,
        token: action.idToken,
        userId: action.userId
    })
};

const authFail = (state,action) => {
    return updateObject(state,{
        error: action.error,
        loading: false
    })
};

const authLogout = (state,action) => {
    return updateObject(state,{
        token: null,
        userId: null
    })
};

const authSignUp = (state,action) => {
    return updateObject(state,{
        token: action.idToken,
        userId: action.userId,
        // name: action.name,
        // nik: action.nik,
        // citizen: action.citizen,
        error: null,
        loading: false
    })
};

const setAuthRedirectPath = (state,action) => {
    return updateObject(state,{
        authRedirectPath: action.path
    })
};

//===========================================================================
//                              REDUCER                
//===========================================================================

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state,action);
        case actionTypes.AUTH_FAIL:
            return authFail(state,action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state,action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state,action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state,action);
        case actionTypes.AUTH_SIGNUP:
            return authSignUp(state,action);
        default:
            return state;
    }
};

export default reducer;