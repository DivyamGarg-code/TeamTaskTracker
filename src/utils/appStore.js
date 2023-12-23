import {configureStore} from '@reduxjs/toolkit'

const appStore=configureStore({
    reducer:{
        data:dataReducer
    }
});

export default appStore;