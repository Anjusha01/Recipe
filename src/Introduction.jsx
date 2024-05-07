import React from 'react';
import './intro.css';
import NavComp from './NavComp';
import { Col, Container, Row } from 'react-bootstrap';
import Search from './Search';

function Introduction() {
    return (
        <div className="introduction">
            <div className="h-100 justify-content-center intro-title-container d-flex align-items-center ">
                <div className='text-center'>
                    <h1 className='text-white intro-title '>Delicious recipes.<br/>Daily updated.</h1>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
