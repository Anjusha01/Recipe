import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function CategoryItems() {
    const[items,setItems]=useState([])
    const {category}=useParams()


    useEffect(()=>{
        let fetchData=async()=>{
            let response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            console.log(response)
            setItems(response.data.meals)
            
        }
        fetchData();
    },[])
  return (
    <>
    <h1 className='text-center'>{category}</h1>
    <div className='d-flex flex-wrap justify-content-center'>
        {items.map((item)=>(
            <Link key={item.idMeal} to={`/categoryitems/${category}/${item.idMeal}`} className='text-decoration-none'>
            <Card style={{ width: '18rem' }} className='m-3 mx-5 border-0 shadow-lg '>
                <Card.Img variant="top" src={item.strMealThumb} />
                <Card.Body>
                <Card.Title> {item.strMeal}</Card.Title>
            </Card.Body>
            </Card>  
            </Link>
             
        ))}
        
    </div>
    </>
    
  )
}

export default CategoryItems