const configureStore = require('@reduxjs/toolkit').configureStore;
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice');
const createLogger = require('redux-logger').createLogger;

const logger = createLogger();
const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store;