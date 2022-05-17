const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {numberOfCakes: 10};
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numberOfCakes--;
        },
        restored: (state, actions) => {
            state.numberOfCakes += actions.payload;
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

