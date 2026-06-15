import { Route, Routes } from 'react-router-dom'

import Pokédex from '../Pages/Pokédex'
import DefaultLayout from '../defaultLayout/defaultLayout'
import Home from '../Pages/Home'

function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout/>}></Route>
            <Route path='/' element={<Home/>}> </Route>
            <Route path='/pokédex' element={<Pokédex/>}></Route>
        </Routes>

    )
}
export default Router