import React from 'react'

const page = async ({params}) => {

    //2. Static side generation (SSG)
    
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/post/${params.ssg}` 
    )

    //remove the cache : 'no-store' makes it SSG
    const data  = res.json()

  return (
    <div>
      
    </div>
  )
}

export default page
