import { useState, useEffect } from 'react'
import { ContainerB,Pagination,PokemonItem,PokemonItemName,PokemonsList } from './styles'
import api from '../../services/api'

function PáginaInicial() {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPokemons, setTotalPokemons] = useState(0)
  const [loading, setLoading] = useState(false)

  const pokemonsPerPage = 18

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const offset = (currentPage - 1) * pokemonsPerPage
        const response = await api.get(`/pokemon?limit=${pokemonsPerPage}&offset=${offset}`)
        
        setPokemons(response.data.results)
        setTotalPokemons(response.data.count)
      } catch (error) {
        console.error("Erro ao buscar pokémons:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [currentPage])

  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <ContainerB>
      <h2>Todos os Pokémons</h2>
      
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <PokemonsList>
            {pokemons.map((pokemon, index) => (
              <PokemonItem key={index}>
                <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 + (currentPage - 1) * pokemonsPerPage}.png`}
                  alt={pokemon.name}
                />
                <PokemonItemName>{pokemon.name}</PokemonItemName>
              </PokemonItem>
            ))}
          </PokemonsList>

          <Pagination>
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              ← Anterior
            </button>
            
            <span>Página {currentPage} de {totalPages}</span>
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Próxima →
            </button>
          </Pagination>
        </>
      )}
    </ContainerB>
  )
}

export default PáginaInicial