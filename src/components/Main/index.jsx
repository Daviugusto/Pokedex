import { useState, useEffect } from 'react'
import { 
  Container, 
  Pokedex, 
  Title, 
  SearchContainer, 
  Input, 
  Button, 
  Card, 
  PokemonName, 
  Info, 
  PokemonImage, 
  Pke,
  InfoPanel,
  InfoItem,
  InfoLabel,
  InfoValue,
  ButtonsContainer,
  ButtonRed,
  ButtonYellow,
  ButtonBlue
} from "./styles";
import api from '../../services/api'

function App() {
  const [pokemons, setPokemons] = useState()
  const [search, setSearch] = useState('')
  const [pokemonsevos, setPokemonsEvos] = useState()

  async function getPokemons() {
    const data = await api.get(`/pokemon/${search}`)
    setPokemons(data.data)
  }

  async function getPokemonsEvos() {
    const data = await api.get(`/pokemon-form/${search}`)
    setPokemonsEvos(data.data)
  }

  useEffect(() => {
    getPokemons()
    getPokemonsEvos()
  }, [])

  return (
    <Container>
      <Pokedex>
        <Title>POKÉDEX</Title>

        <SearchContainer>
          <Input
            type="text"
            placeholder="Nome ou número do Pokémon"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button onClick={getPokemons}>
            Buscar
          </Button>
        </SearchContainer>

        <Card>
          {pokemons?.sprites?.other?.["official-artwork"]?.front_default ? (
            <PokemonImage
              src={pokemons.sprites.other["official-artwork"].front_default}
              alt="Pokemon"
            />
          ) : (
            <PokemonImage
              src={pokemons?.sprites?.front_default}
              alt="Pokemon"
            />
          )}
          {pokemons?.name && (
            <>
              <PokemonName>{pokemons.name}</PokemonName>
              <Info>#{String(pokemons.id).padStart(3, '0')}</Info>
            </>
          )}
        </Card>

        <Pke>
          <InfoPanel>
            <InfoItem>
              <InfoLabel>Tipo</InfoLabel>
              <InfoValue>{pokemons?.types?.[0]?.type?.name || '-'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Altura</InfoLabel>
              <InfoValue>{pokemons?.height ? (pokemons.height / 10) + 'm' : '-'}</InfoValue>
            </InfoItem>
          </InfoPanel>
          <InfoPanel>
            <InfoItem>
              <InfoLabel>Peso</InfoLabel>
              <InfoValue>{pokemons?.weight ? (pokemons.weight / 10) + 'kg' : '-'}</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Habilidade</InfoLabel>
              <InfoValue>{pokemons?.abilities?.[0]?.ability?.name || '-'}</InfoValue>
            </InfoItem>
          </InfoPanel>
        </Pke>

        <ButtonsContainer>
          <ButtonRed>◀</ButtonRed>
          <ButtonYellow>●</ButtonYellow>
          <ButtonBlue>▶</ButtonBlue>
        </ButtonsContainer>
      </Pokedex>
    </Container>
  );
}

export default App