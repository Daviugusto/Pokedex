import { useState, useEffect } from 'react'
import { ContainerH,PáginaInicial,Créditos,Pokédex} from './styles'

function Headers() {



  return (
    <ContainerH>
      <PáginaInicial><Link to="/">Página Inicial</Link></PáginaInicial>
      <Pokédex ><Link to="/Pokédex">Pokédex</Link></Pokédex>
      <Créditos><Link to="/Créditos">Créditos</Link></Créditos>
    </ContainerH>
  )
}

export default Headers
