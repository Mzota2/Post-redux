import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import './Posts.css'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
function ViewPosts() {
    const posts = useSelector(state => state.posts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className='posts-container container'>
        {
            orderedPosts.map(post =>{
                return(
                    <div key={post.id} className="post-container">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>

                        <PostAuthor userId={post.userId}/>
                        <TimeAgo timeStamp={post.date}/>

                        <div className="post-btns">
                            <Link className='post-btn view-btn' to={`/singlePost/${post.id}`}>View</Link>
                            <Link className='post-btn edit-btn ' to={`/editPost/${post.id}`}>Edit</Link>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default ViewPosts