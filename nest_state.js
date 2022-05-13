const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'Vinay',
    address: {
        street: '171, menase',
        city: 'sringeri',
        pincode: 577139
    }
};

const STREET_UPDATE = 'STREET_UPDATE';

const streetUpdate = function(street) {
    return {
        type: STREET_UPDATE,
        payload: street,
    }
};

function reducer(state = initialState, actions) {
    switch(actions.type){
        case STREET_UPDATE: return produce(state, (draft) => {
            draft.address.street = actions.payload
        });

        default: return state;
    }
}

const store = redux.createStore(reducer);

console.log("initial State ", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("updated state ", store.getState());
})

store.dispatch(streetUpdate('#171, menase'));
unsubscribe();