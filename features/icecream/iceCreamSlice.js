const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    numberOfIceCreams: 20
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--;
        },
        restored: (state, actions) => {
            state.numberOfIceCreams += actions.payload;
        }
    },
    extraReducers:{
        ['cake/ordered']: (state) => {
            state.numberOfIceCreams--;
        }
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.actions = iceCreamSlice.actions;