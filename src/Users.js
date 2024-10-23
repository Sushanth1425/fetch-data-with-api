import React from 'react'

const Users = ({fetchURL}) => {
  return (
    <button onClick={()=>fetchURL('users')}>Users</button>
  )
}

export default Users