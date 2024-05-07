import React, { useState } from 'react';
import axios from 'axios';
import './search.css'
import { Container, Row, Col, Card } from 'react-bootstrap';

function Search() {
    const [data, setData] = useState([]);
    const [recipie, setRecipie] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    let handleChange = (event) => {
        setRecipie(event.target.value);
    };

    let handleSubmit = async () => {
        if (!recipie) {
            alert('Please enter a search term');
            return;
        }
    
        setIsLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipie}`);
            console.log(response.data);
            setData(response.data.meals || []);
            if (!response.data.meals) {
                setError('No results found');
            }
        } catch (error) {
            setError('Failed to fetch data. Please try again.');
            console.error('Search API error: ', error);
        } finally {
            setIsLoading(false);
        }
    };
    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
        
    return (
        <Container fluid className='mt-5'>
            <h6 className='text-center fs-1 title text-reset '>Search For a Recipie</h6>
            <div className='justify-content-center d-flex flex-wrap'>
                <input 
                type="text" 
                placeholder="Enter a recipe name..."
                onChange={handleChange} 
                value={recipie}
                onKeyDown={handleKeyPress}
                className='m-2'/>
            <button onClick={handleSubmit} disabled={isLoading} className='m-2'>
                {isLoading ? 'Searching...' : 'Search'}
            </button>
    

            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                {error && <p>{error}</p>}
                {data.map((item, index) => (
                    <Card key={index} style={{width:'18rem'}} className='m-3 mx-5 border-0 shadow-lg '>
                        <Card.Img src={item.strMealThumb} variant='top'/>
                        <Card.Body>
                            <Card.Title>{item.strMeal}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
            
            
           
    );
}

export default Search;
