import React from 'react'

const page = async ({params}) => {

    //3. Incremental static regeneration (ISR)

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.isr}`, 
        {next : {revalidate : 10}} //this makes it ISR
    )
    const data  = res.json()

  return (
    <div>
      {params.isr}
    </div>
  )
}

export default page
