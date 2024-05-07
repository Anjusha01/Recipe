import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Category() {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            let response= await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            console.log(response.data.categories);
            setCategories(response.data.categories)
        }
        fetchData();
    },[]);
   

  return (
    <>
    <h1 className='text-center mt-5'>Categories</h1>
    <div className='d-flex justify-content-center flex-wrap mx-5 p-2'>
        
    {categories.map((item) => (
        <Link key={item.strCategory} to={`/categoryitems/${item.strCategory}`} className='text-decoration-none'> 
         <Card className='btn btn-light border m-2 p-3 d-flex align-items-center justify-content-center '>
            <Card.Img src={item.strCategoryThumb} alt="" />
            <Card.Text className='text-center'>{item.strCategory}</Card.Text>
        </Card>
        </Link>
       
    ))}
</div>
    </>
    
  )
}

export default Category