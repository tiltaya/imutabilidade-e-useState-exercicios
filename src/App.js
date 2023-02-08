import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {PokemonCard} from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
  const [pichu, setPichu] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0
  });
  
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

  const [abra, setAbra] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 19.5,
    color: 'purple',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/0063Abra.png/250px-0063Abra.png',
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


  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  */
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pichu} evolucao={setPichu}/>
      <PokemonCard pokemon={abra} evolucao={setAbra}/>
    </FlexContainer>
  </>
    
  );
}

export default App;
