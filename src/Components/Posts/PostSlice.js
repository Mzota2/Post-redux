import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const postsSlice = createSlice ({
    initialState,
    name:'posts',
    reducers:{
        postAdded:(state, action)=>{
            state.push(action.payload);
        },

        postEdited:(state, action)=>{
            const {id, title, content} = action.payload;
            const foundPost = state.find(post => post.id === id);
            if(foundPost){
                foundPost.title = title;
                foundPost.content = content;
            }
        }
    }
});

export const {postAdded, postEdited} =  postsSlice.actions;

export default postsSlice.reducer;

