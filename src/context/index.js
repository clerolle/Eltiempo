"use client";
import React, { useEffect, useState, createContext } from "react";

const Context = createContext();

function Provider(props) {
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
    <Context.Provider
      value={{
        data,
        pokemons,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, Provider };
