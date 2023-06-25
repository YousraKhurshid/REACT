import React from 'react'

export default function HeaderSection() {
  return (
    <div className="bg-dark">
     <div  style={{width: '95vw', height: '100vh'}} className="d-flex justify-content-center align-items-center">
      <div>
        <img className='img-fluid' width="650px" src="https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg" alt="" />
      </div>
      <div className="container">
        <h1 className='text-white'>
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti magni porro officiis. Saepe vel nisi nulla alias, nam neque consequuntur sapiente asperiores illo placeat blanditiis culpa qui odit temporibus facere.
        </p>
      </div>
     </div>
    </div>
  )
}
