import { createSlice } from "@reduxjs/toolkit";

const initialState = [{id:1, username:'Emmanuel Mzota'}, {id:2, username:'Samuel Mzota'}];

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
});


export default userSlice.reducer;


