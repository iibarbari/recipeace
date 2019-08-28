import React from 'react';
import {
    Col
} from 'reactstrap';

const Recipe = ({recipe})=>{
    return(
        <Col sm="12" md="6">
            <h1>{recipe.label}</h1>
            <img src={recipe.image} alt={recipe.label}/>>
        </Col>
    )
}


export default Recipe;