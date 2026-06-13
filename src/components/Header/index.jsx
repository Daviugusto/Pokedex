import { useState, useEffect } from 'react'
import { ContainerH,PáginaInicial,Créditos,Pokédex} from './styles'
import { Link } from 'react-router-dom'

function Headers() {



  return (
    <ContainerH>
      <PáginaInicial>< Link to="/">Página Inicial/</Link></PáginaInicial>
      <Pokédex ><Link to="/pokédex">Pokédex</Link></Pokédex>
      <Créditos><Link to="/créditos">Créditos</Link></Créditos>
    </ContainerH>
  )
}

export default Headers
