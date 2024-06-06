import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

function Fav() {
    const favorites = useSelector(state => state.favstore.fav);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Favorite Recipes</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {favorites.map((item, index) => (
                    <RecipeCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Fav;
