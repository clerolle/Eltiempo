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
          if (pokeCatched.catchedPoke?.includes(data.name)) {
            setStatePoke(true);
          } else {
            setStatePoke(false);
          }
        });
    }
  }, [show, urlPokemon]);


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
        <Row className="attributes mb-3">
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
        <Row className="mb-3">
          <Col md="6">
            <h6 className="title-text">State</h6>
            {statePoke ? "catched" : "uncatched"}
          </Col>          
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
        <Button variant="secondary" onClick={handleClose}>
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
