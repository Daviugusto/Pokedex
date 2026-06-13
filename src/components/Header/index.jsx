import { useState, useEffect } from 'react'
import { ContainerH,PáginaInicial,Créditos,Pokédex} from './styles'

function Headers() {



  return (
    <ContainerH>
      <PáginaInicial><a href="/">Página Inicial</a></PáginaInicial>
      <Pokédex ><a href="/Pokédex">Pokédex</a></Pokédex>
      <Créditos><a href="/Créditos">Créditos</a></Créditos>
    </ContainerH>
  )
}

export default Headers
