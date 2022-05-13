const redux = require('redux');
const thunk = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [],
    error:''
};

const USERS_REQUESTED = 'USERS_REQUESTED';
const USERS_SUCCEEDED = 'USERS_SUCCEEDED';
const USERS_FAILED = 'USERS_FAILED';

const userRequest = function(){
    return{
        type: USERS_REQUESTED
    }
}

const userSucceded = function(users) {
    return {
        type: USERS_SUCCEEDED,
        payload: users
    }
}

const userFailed = function(err) {
    return {
        type: USERS_FAILED,
        payload: err
    }
}

const fetchUser = () => {
    return function(dispatch){
        dispatch(userRequest());

        axios.get('https://jsonplaceholder.typiode.com/users')
        .then(response=>{
            let data = response.data.map(dt=> dt.name);
            dispatch(userSucceded(data));
        })
        .catch(err=>{
            dispatch(userFailed(err.message));
        })
    }
}


const reducer = function(state = initialState, actions) {
    switch(actions.type) {
        case USERS_REQUESTED: return{
            ...state,
            loading: true
        }

        case USERS_SUCCEEDED: return {
            loading: false,
            users: actions.payload,
            error: ''
        }

        case USERS_FAILED: return {
            loading: false,
            users: [],
            error: actions.payload
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(()=>console.log('state ', store.getState()));

store.dispatch(fetchUser());