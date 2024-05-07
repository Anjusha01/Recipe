import React, { useState } from 'react';
import './search.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Search() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [recipie, setRecipie] = useState('');
    const navigate=useNavigate();
    let handleChange = (event) => {
        setRecipie(event.target.value);
    };
    let handleSubmit = async () => {
        if (!recipie) {
            alert('Please enter a search term');
            return;
        }
        navigate("/searchresult",{state:{key:recipie}})
    };
    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };  
    return (
        <Container fluid className=''>
           <h6 className={`text-center fs-1 title ${isHomePage ? "text-light" : ""}`}>
  Search For a Recipe
</h6>

            <div className='justify-content-center d-flex flex-wrap'>
                <input 
                type="text" 
                placeholder="Enter a recipe name..."
                onChange={handleChange} 
                value={recipie}
                onKeyDown={handleKeyPress}
                className='m-2'/>
            <button onClick={handleSubmit} className='m-2'>
                Search
            </button>
    

            </div>
        </Container>
            
            
           
    );
}

export default Search;
