import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "@/app/globals.css";

function Detail({ show, handleClose, pokemon, urlPokemon, setCatched, catched }) {

  const [detail, setDetail] = useState([]);
  const [statePoke, setStatePoke] = useState(false);

  useEffect(() => {
    if (show) {
      fetch(urlPokemon)
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
          let pokeCatched = JSON.parse(localStorage.getItem("pokemons"));
          console.log(pokeCatched);
          console.log(data.name)
          if(pokeCatched.catchedPoke?.includes(data.name)){
            setStatePoke(true);
          }else{
            setStatePoke(false);
          }
        });
    }
  }, [show, urlPokemon]);


  const catchedPokemon =() => {
    setCatched([...catched, detail.name])
    let catc = {catchedPoke: catched}; 
    localStorage.setItem("pokemons", JSON.stringify(catc))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{detail?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={detail.sprites?.front_default}
          alt={pokemon.name}
          width={100}
          height={100}
        />
      </Modal.Body>
      <Modal.Body>
        <h4 className="title-text">Abilities</h4>
        <Row>
        {detail?.abilities?.map(x=> 
        <li>{x.ability?.name}</li>
          )}
        </Row>
      </Modal.Body>
      <Modal.Body>
        <h4>Base experience</h4>
        <ul> 
        <li>{detail?.base_experience}</li>
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h4>State</h4>
        {statePoke ? "catched" : "uncatched"}
      </Modal.Body>
      {detail.held_items?.length > 0 && 
      <Modal.Body>
        <h3>Held items</h3>
        <ul>
        {detail.held_items?.map(x=> 
        <li>{x.item?.name}</li>
          )}
        </ul>
      </Modal.Body>
      }
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={catchedPokemon}>
          catched
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Detail;
