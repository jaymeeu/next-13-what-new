import React from 'react'

const page = async ({params}) => {

//1. Server side rendering (SSR)


    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.ssr}`, 
        {cache : 'no-store'} //this makes it SSR
    )
    const data  = res.json()

  return (
    <div>
      
    </div>
  )
}

export default page
