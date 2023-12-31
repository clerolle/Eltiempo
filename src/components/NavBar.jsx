"use client";
import { searchInfo } from '@/redux/features/info/infoSlice';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch} from 'react-redux';

function NavBar({setPokemons}) {

  //  Dispatch instance
  const dispatch = useDispatch()

  // Local state
  const [poke, setPoke] = useState("")
  
  const PokemonTypeHandler=(poke)=>{

    fetch(`https://pokeapi.co/api/v2/type/${poke}`)
          .then((res) => res.json())
          .then((data) => {
            setPokemons(data.pokemon);
            dispatch(searchInfo(data.pokemon));
          });
  }
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">POKEMON LAND</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={poke}
              onChange={(e)=>setPoke(e.target.value)}
            />
            <Button variant="outline-success" onClick={()=>PokemonTypeHandler(poke)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;