import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Detail({ show, handleClose, pokemon, urlPokemon }) {
  console.log(urlPokemon)
  const [detail, setDetail] = useState([]);
  console.log(detail)
  useEffect(() => {
    if (show) {
      fetch(urlPokemon)
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
        });
    }
  }, [show, urlPokemon]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{detail?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Abilities</h3>
        <ul>
        {detail?.abilities?.map(x=> 
        <li>{x.ability?.name}</li>
          )}
        </ul>
      </Modal.Body>
      <Modal.Body>
        <h3>Base experience</h3>
        <ul> 
        <li>{detail?.base_experience}</li>
        </ul>
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
        {/* <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Detail;
