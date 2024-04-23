import React from 'react'
import "./Posts.css"
import Post from './post/Post'
import NewPost from './NewPost/NewPost'
function Posts() {
  return (
    <>
    <div className='posts'>
      <NewPost/>
      <Post/>
      <Post/>
    </div>
    </>
    
  )
}

export default Posts