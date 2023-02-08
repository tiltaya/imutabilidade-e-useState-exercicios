import React, {useState} from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'
export {PokemonCard}



const PokemonCard = ({pokemon, evolucao}) => {

  const [pikachu, setPikachu] = useState({
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/250px-0025Pikachu.png',
    id: 0
  });

  const [raichu, setRaichu] = useState({
    name: "Raichu",
    type: "Electric",
    evolved: true,
    weight: 30,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/250px-0026Raichu.png',
    id: 0
  });

  const [kadabra, setKadabra] = useState({
    name: "Kadabra",
    type: "Psychic",
    evolved: true,
    weight: 56.5,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/a/af/0064Kadabra.png/250px-0064Kadabra.png',
    id: 0
  }); 

  const [alakazam, setAlakazam] = useState({
    name: "Alakazam ",
    type: "Psychic",
    evolved: true,
    weight: 48,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/bb/0065Alakazam.png/250px-0065Alakazam.png',
    id: 0
  }); 
  
    const evoluirPokemon = () => {
      if (pokemon.name === "Pichu") {
        evolucao(pikachu)
      } else if (pokemon.name === "Pikachu") {
        evolucao(raichu)
      } else if (pokemon.name === "Abra") {
        evolucao(kadabra)
      } else if (pokemon.name === "Kadabra") {
        evolucao(alakazam)
      }
    }
    
  return (
    <Card color={pokemon.color}>
        <img src={pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}