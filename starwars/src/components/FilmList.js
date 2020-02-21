import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const ListDiv = styled.div`
    ul{
        list-style-position: inside;
        margin: 0;
        padding: 0;
    }
    li{
        color: #EEDB00;
        margin: 0 auto;
        width: 50%;
    }
`;

function FilmList(props){
    const [film, setFilm] = useState([]);
    useEffect(()=>{
            axios.get(props.film)
            .then(response=>{
                setFilm(response.data.title)
            })
            .catch(error =>{
                console.log("Failed, I have ", error);
            })
        },[]);
    console.log(film)
    console.log(props.film)
    return(
        <ListDiv>
            <ul>
                <li>{film}</li>
            </ul>
        </ListDiv>
    )
}

export default FilmList

