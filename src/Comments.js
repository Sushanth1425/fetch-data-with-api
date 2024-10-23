import React from 'react'

const Comments = ({fetchURL}) => {
  return (
    <button onClick={()=>fetchURL('comments')}>Comments</button>
  )
}

export default Comments