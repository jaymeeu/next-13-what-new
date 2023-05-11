import React from 'react'

const pages = ({params}) => {
  return (
    <div>pages {params['post-id']}</div>
  )
}

export default pages