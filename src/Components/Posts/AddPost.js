import React from 'react'
import './Posts.css';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './PostSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddPost() {
    const dispatch = useDispatch();
    const [post, setPost] = React.useState({
        title:'',
        content:'',
        userId:'',
        date:new Date().toISOString()

    });

    function handleOnChangePost(e){
        setPost(post =>{
            return{
                ...post,
                [e.target.name]:e.target.value
            }
        });

        console.log(post.userId)
    }

    const selectOptions = useSelector(state => state.users.map(user =>{
        return (
            <option name='userId' value={user.id} key={user.id}>{user.username}</option>
        )
    }));

    function handleAddPost(e){
        e.preventDefault();

        if(post.title && post.content){
            dispatch(postAdded({...post, id:nanoid()}));

            setPost({title:'', content:''});

        }else{
            console.log('something is wrong')
        }
    }
  return (
    <div className='container'>
        <h2 className='hero-text-title'>What is on your mind ?</h2>
        <form className='post-form'>
            <label htmlFor="title">Title</label>
            <input value={post.title} onChange={handleOnChangePost} className='input-field' type="text" name='title' id='title' />

            <label htmlFor="content">Content</label>
            <input value={post.content} onChange={handleOnChangePost} className='input-field' name="content" id="content"></input>

            <button onClick={handleAddPost} className='post-btn'>Post</button>

            <select name="userId" value={post.userId} onChange={handleOnChangePost} id="users">
                <option value=""></option>
                {selectOptions}
            </select>
        </form>

    </div>
    
  )
}

export default AddPost