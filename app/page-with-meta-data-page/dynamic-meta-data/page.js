import React from 'react'


export async function generateMetadata({params, searchParams}) {
    const product = await getProduct(params.id);
    return{
        title : product.title
    }
}

export const page = () => {
  return (
    <div>page</div>
  )
}
