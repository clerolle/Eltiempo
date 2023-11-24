"use client";
import CarouselComponent from '@/components/CarouselComponent';
import NavBar from '@/components/NavBar';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/context';

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container.js";

const PokemonList = () => {
    const [data, setData] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setPokemons(data.results);
          });
      }, []);

  return (
    <Container className="mt-4 mb-4">
      <Row className="gap-5">
        <NavBar/>
        <CarouselComponent pokemons={pokemons}/>
        </Row>
    </Container>
  )
}

export default PokemonList