const CAKE_ORDERED = 'CAKE_ORDERED';

const initialState = {numberOfCakes: 10};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                numberOfCakes: state.numberOfCakes - 1,
            }
        
        default: return state;
    }
}