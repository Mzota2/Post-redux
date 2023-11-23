import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postEdited } from './PostSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {id} = useParams();
    const foundPost = useSelector(state => state.posts.find(post => post.id == id));

    const [post, setPost] = React.useState({
        title:'',
        content:''
    })

    function handleOnChangePost(e){
        setPost(post =>{
            return{
                ...post,
                [e.target.name]:e.target.value
            }
        });
    }

    function handleEditPost(e){
        e.preventDefault();

        if(post.title && post.content){
            dispatch(postEdited(post));
            navigate('/')
        }

        else{
            console.log('something went wrong')
        }
    }

    React.useEffect(()=>{
        setPost(foundPost);
    }, []);


    if(!foundPost){
        return <p>Not found</p>
    }
  return (
    <div className='container'>
        <form className='post-form'>
            <label htmlFor="title">Title</label>
            <input value={post.title} onChange={handleOnChangePost} className='input-field' type="text" name='title' id='title' />

            <label htmlFor="content">Content</label>
            <input value={post.content} onChange={handleOnChangePost} className='input-field' name="content" id="content"></input>

            <button onClick={handleEditPost} className='post-btn'>Post</button>
        </form>

    </div>
  )
}

export default EditPost