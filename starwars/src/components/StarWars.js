import React, { useState, useEffect } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Col,
  } from "reactstrap";
  import axios from "axios";
  import styled from "styled-components";
  
const CardDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #000000;
margin: 0 auto;
margin-top:5%;
margin-bottom: 10%;
max-width: 50%;
border: 5px solid #EEDB00;
box-shadow: 10px 5px 5px 5px black;
h2,, h3, p{
    color: #EEDB00;
    padding: .5%;
}
  `;
  
const StarWars = ({ props }) => {
    const filmArray = props.films;
    // console.log(filmArray);
    const [films, setFilms] = useState([]);
    const filmList = []
    useEffect(()=>{
        for(let i = 0; i < filmArray.length; i++)
        axios.get(filmArray[i])
        .then(response=>{
            console.log(response.data.title)
            setFilms(response.data.title);

        })
        .catch(error =>{
            console.log("Failed, I have ", error);
        })
    },[])
    // filmList.push(films);
    console.log(filmList)
    
   return(
    <CardDiv>
        <div className="text-content">
            <h2>{props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <h3>Has appeared in: </h3>
            {/* <ul>
            {films.map(film=>{
                return <li>{film}</li>
            })}; 
            </ul>   */}
        </div>
    </CardDiv>
   ) 
// return (
//     <Col md='6'>
//     <Card>
//         <CardBody>
//         <CardTitle>{props.name}</CardTitle>
//         <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
//         </CardBody>
//         <CardBody>
//         <CardText>{props.height}</CardText>
//         <CardText>{props.mass}</CardText>
//         </CardBody>
//     </Card>
//     </Col>

// );
};

export default StarWars;