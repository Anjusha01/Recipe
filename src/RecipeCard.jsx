import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { setFav, removeFav } from './favSlice';
import { Link } from 'react-router-dom';
import { Card, CardFooter, CardImg, CardTitle, Badge } from 'react-bootstrap';
import './RecipeCard.css';

function RecipeCard({ item }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favstore.fav);
    
    const handleFavoriteToggle = (item) => {
        const isFavorite = favorites.some((fav) => fav.id === item.idMeal);
        if (isFavorite) {
            dispatch(removeFav(item.idMeal));
        } else {
            dispatch(setFav({ id: item.idMeal, ...item }));
        }
    };

    return (
        <Card className='recipe-card m-3 border-0 shadow-lg'>
            <CardImg variant='top' src={item.strMealThumb} alt={item.strMeal} className='card-img'/>
            <Link to={`/categoryitems/${item.strCategory}/${item.idMeal}`} className='link'>
                <Card.Body className='card-body'>
                    <CardTitle >{item.strMeal}</CardTitle>
                </Card.Body>
            </Link>
            <Badge className='category-badge' pill bg="info">{item.strCategory}</Badge>
            <CardFooter className='card-footer' >
                <button 
                    className='fav-button' 
                    onClick={() => handleFavoriteToggle(item)}
                >
                    {favorites.some((fav) => fav.id === item.idMeal) ? <FaHeart className='heart-icon'/> : <FaRegHeart className='heart-icon'/>}
                </button>
            </CardFooter>
        </Card>
    );
}

export default RecipeCard;
