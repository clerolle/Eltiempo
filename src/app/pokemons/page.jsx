"use client";
import CarouselComponent from '@/components/CarouselComponent';
import NavBar from '@/components/NavBar';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/context';

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container.js";
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '@/redux/features/info/infoSlice';

const PokemonList = () => {
    
    // Redux
    const dispatch = useDispatch();

    //local state
    const [data, setData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [ catched, setCatched] = useState([]);
    const [ watched, setWatched] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((res) => res.json())
          .then((data) => {
            dispatch(getInfo(data.results));
            setData(data);
            setPokemons(data.results);
          });
      }, []);

  return (
    <>
        <NavBar setPokemons={setPokemons}/>
        <Container className="mt-4 mb-4">
        <Row className="gap-5">
            <CarouselComponent pokemons={pokemons} setCatched={setCatched} catched={catched} watched={watched} setWatched={setWatched}/>
            </Row>
        </Container>
    </>
  )
}

export default PokemonList