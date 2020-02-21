import React from 'react';
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
  
//   const cardDiv = styled.div`
//     margin: 0 auto;
//     width: 50%;
//     border: 5px solid black;
//   `;
  
const StarWars = ({ props }) => {
return (
    <Col xs="6" md= "4" xl="3">
    <Card>
        <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.birth_year}</CardSubtitle>
        </CardBody>
        <img width="100%" src="" alt="Card image cap" />
        <CardBody>
        <CardText>
            {/* {props.films.map(film=>{
            axios.get("{film}")
            .then(response =>{
                console.log(response)
            })
            return <p>{film}</p>
            })} */}
        </CardText>
        <CardLink href="#">Card Link</CardLink>
        <CardLink href="#">Another Link</CardLink>
        </CardBody>
    </Card>
    </Col>
);
};

export default StarWars;