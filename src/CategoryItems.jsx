import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import RecipeCard from './RecipeCard';

function CategoryItems() {
  const [meals, setMeals] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        console.log(response);
        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <h1 className="text-center">{category}</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {meals.map((item,index) => (
          <RecipeCard key={index} item={item} />
        ))}
      </div>
    </>
  );
}

export default CategoryItems;
