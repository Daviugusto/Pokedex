import { Route, Routes } from 'react-router-dom'

import Pokédex from '../Pages/Pokédex'
import Créditos from '../Pages/Créditos'
import DefaultLayout from '../defaultLayout/defaultLayout'
import Home from '../Pages/Home'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout/>}></Route>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/pokédex' element={<Pokédex/>}></Route>
            <Route path='/créditos' element={<Créditos/>}></Route>
        </Routes>

    )
}
export default Router