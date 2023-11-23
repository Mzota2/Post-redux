import {configureStore} from '@reduxjs/toolkit';
import PostSlice from './Components/Posts/PostSlice';
import usersSlice from './Components/Users/usersSlice';
export default configureStore({
    reducer:{
        posts:PostSlice,
        users:usersSlice
    }
})