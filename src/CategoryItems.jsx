import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFav, setFav } from './favSlice';

function CategoryItems() {
  const [meals, setMeals] = useState([]);
  const { category } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favstore.fav);

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

  const handleFavoriteToggle = (item) => {
    const isFavorite = favorites.some((fav) => fav.id === item.idMeal);
    if (isFavorite) {
      dispatch(removeFav(item.idMeal));
    } else {
      dispatch(setFav({ id: item.idMeal, ...item }));
    }
  };

  return (
    <>
      <h1 className="text-center">{category}</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {meals.map((item) => (
          <Card key={item.idMeal} style={{ width: '18rem' }} className="m-3 mx-5 border-0 shadow-lg">
            <Card.Img variant="top" src={item.strMealThumb} />
            <Card.Body>
              <Card.Title>{item.strMeal}</Card.Title>
            </Card.Body>
            <Card.Footer>
              <Link to={`/categoryitems/${category}/${item.idMeal}`} className="text-decoration-none">
                <Button>Get recipe</Button>
              </Link>
              <button onClick={() => handleFavoriteToggle(item)}>
                {favorites.some((fav) => fav.id === item.idMeal) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CategoryItems;
