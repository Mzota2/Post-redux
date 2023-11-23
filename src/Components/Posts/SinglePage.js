import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function SinglePage() {
    const id = window.location.pathname.slice(12);
    
    const foundPost = useSelector(state => state.posts.find(post => post.id == id));
    
    if(!foundPost){
        return <p>Not found</p>
    }

  return (
    <div className="post-container">
        <h3>{foundPost.title}</h3>
        <p>{foundPost.content}</p>

        <div className="post-btns">
            <a className='post-btn edit-btn ' href={`editPost:${foundPost.id}`}>Edit</a>
        </div>
    </div>
  )
}

export default SinglePage