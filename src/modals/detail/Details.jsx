"use client";
import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "@/app/globals.css";


function Detail({ show, handleClose, pokemon, urlPokemon, setCatched, catched, watched, setWatched }) {

  const [detail, setDetail] = useState([]);
  const [statePoke, setStatePoke] = useState(false);
  const [watchedPoke, setWatchedPoke] = useState(false);

  useEffect(() => {
    if (show) {
      fetch(urlPokemon)
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
          setWatched([...watched, data.name]);
          let pokeCatched = JSON.parse(localStorage.getItem("pokemons"));
          if (pokeCatched?.catchedPoke?.includes(data.name)) {
            setStatePoke(true);
          } else {
            setStatePoke(false);
          }
          let pokeWatched = JSON.parse(localStorage.getItem("pokemonswatched"));
          if (pokeWatched?.watchedPoke?.includes(data.name)) {
            setWatchedPoke(true);
          } else {
            setWatchedPoke(false);
          }
        });
    }
  }, [show, urlPokemon]);

  const watchedPokemon = () => {
    let watc = { watchedPoke: watched };
    console.log(watc);
    localStorage.setItem("pokemonswatched", JSON.stringify(watc))
  }

  const catchedPokemon = () => {
    setCatched([...catched, detail.name])
    let catc = { catchedPoke: catched };
    localStorage.setItem("pokemons", JSON.stringify(catc))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">{detail?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={detail.sprites?.front_default}
          alt={detail?.name}
          width={50}
          height={100}
          className="img-center"
        />
      </Modal.Body>
      <Container>
        <Row className="attributes mb-3 text-dark">
          <Col>
            <h6 className="title-text">Abilities</h6>
            {detail?.abilities?.map(x =>
              <li>{x.ability?.name}</li>
            )}
          </Col>
          <Col>
            <h6 className="title-text">Base experience</h6>
            <li>{detail?.base_experience}</li>
          </Col>
        </Row>
        <Row className="attributes mb-3 text-dark">
          <Col md="6">
            <h6 className="title-text">State</h6>
            <li>{statePoke ? "catched" : "uncatched"}</li>
          </Col>
          <Col md="6">
            <h6 className="title-text">Watched</h6>
            <li>{watchedPoke ? "Yes" : "No"}</li>
          </Col>
        </Row>
        <Row className="attributes mb-3 text-dark">
          {detail.held_items?.length > 0 &&
            <Col md="6">
              <h6 className="title-text">Held items</h6>
              {detail.held_items?.map(x =>
                <li>{x.item?.name}</li>
              )}
            </Col>
          }
        </Row>
      </Container>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { handleClose(); watchedPokemon(); }}>
          Close
        </Button>
        <Button variant="primary" onClick={catchedPokemon}>
          Catch
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Detail;
