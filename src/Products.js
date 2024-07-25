import React from 'react'

function Products({product}) {
  return (
   
        <>
  
  <div className="card" style={{ width: "18rem" }}>
    <img src="{product.image}" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.id}</p>
      <p className="card-text">
       {product.price}
      </p>
      <button href="#" className="btn btn-primary" >
       Add to Cart
      </button>
    </div>
  </div>
</>

      
   
  )
}

export default Products
