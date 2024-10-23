import React from 'react'

const Posts = ({fetchURL}) => {
  return (
    <button onClick={()=>fetchURL('posts')}>Posts</button>
  )
}

export default Posts