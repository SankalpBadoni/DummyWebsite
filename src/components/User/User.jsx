import React from 'react'
import { useParams } from 'react-router-dom'
// we have to use /user/xyz in url to see this

function User() {
    const {userid} = useParams()
  return (
    <div>
      User: {userid}
    </div>
  )
}

export default User
