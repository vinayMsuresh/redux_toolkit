const redux = require('redux');
const redux_logger = require('redux-logger');

const applyMiddleware = redux.applyMiddleware;
const logger = redux_logger.createLogger();
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_RESTORED = 'CAKE_RESTORED';
const CAKE_ORDERED = 'CAKE_ORDERED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTORED = 'ICECREAM_RESTORED';

// const initialState = {numberOfCakes: 10, numberOfIceCreams: 20};
const initialCakeState = {numberOfCakes: 10};
const initialIceCreamState = {numberOfIceCreams: 20};

const orderCake = function(){
    return{
        type: CAKE_ORDERED,
    }
};

const restoreCake = function(qty = 1) {
    return{
        type: CAKE_RESTORED,
        payload: qty
    }
}

const orderIcecream = function() {
    return {
        type: ICECREAM_ORDERED,
    }
}

const restoreIcecream = function(qty = 1) {
    return {
        type: ICECREAM_RESTORED,
        payload: qty,
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTORED:{
            return{
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            }
        }        
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:{
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        }
        case ICECREAM_RESTORED: {
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload,
            }
        }
        
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial State ',store.getState());
const unsbscribe = store.subscribe(()=>{});

const actions = bindActionCreators({orderCake, restoreCake, orderIcecream, restoreIcecream}, store.dispatch);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(3));

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restoreCake(4);

actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restoreIcecream(3);

unsbscribe();