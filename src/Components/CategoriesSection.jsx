import axios from 'axios'
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';

export default function CategoriesSection() {


useEffect(()=>{
  axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json').then( json=> console.log(json.data))

},[])

  return (
    <div className="container">
   <div className="my-5 text-center">
   <h1>
   Categories
   </h1>
   <p className="text-secondary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum saepe ipsum quo nam, expedita facere est alias incidunt fuga mollitia cupiditate rem id quos aperiam quisquam laboriosam deleniti hic.
    </p>
   </div>
   <div className="row">
    <div className="col-md-4">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
   </div>
    </div>
  )
}
