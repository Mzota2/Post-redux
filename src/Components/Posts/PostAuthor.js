import React from 'react'
import { useSelector } from 'react-redux'

function PostAuthor({userId}) {

    const foundUser = useSelector(state => state.users.find(user => user.id == userId));

  return (
    <div>
        
        {foundUser ? <p>by {foundUser.username}</p>:<p>Unknown user</p>}

    </div>
  )
}

export default PostAuthor