import React from 'react'
import {useParams, Link} from "react-router-dom"
export default function ProductDetail() {
    const params = useParams()
  return (
    <>
    <div>ProductDetail</div>
    <p>{params.productId}</p>
    <p><Link to=".." relative='path'>Back</Link></p>
    </>
  )
}
