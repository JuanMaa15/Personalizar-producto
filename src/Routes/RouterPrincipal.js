import React, { useState } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Personalizar } from '../components/Personalizar'
import { Carrito } from '../components/Carrito'
import { Listado } from '../components/Listado'
import { Error } from '../components/Error'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Base } from '../components/personalizar/Base'
import { Pasabocas } from '../components/personalizar/Pasabocas'
import { Dulces } from '../components/personalizar/Dulces'
import { Refrescos } from '../components/personalizar/Refrescos'
import { Bombas } from '../components/personalizar/Bombas'
import { Peluches } from '../components/personalizar/Peluches'
import { Detalles } from '../components/Detalles'

export const RouterPrincipal = () => {

  const [total, setTotal] = useState(0);
  const [ingredientes, setIngredientes] = useState([]);
 

  return (
    <BrowserRouter>

        <Header />

        <main>
            <Routes>
                <Route path='/' element={ <Inicio />} />
                <Route path='/inicio' element={ <Inicio />} />

                <Route path='/personalizar' element={ <Personalizar ingredientes={ingredientes} setIngredientes={setIngredientes} total={total} setTotal={setTotal} />} >
                  <Route path='' element={ <Navigate to="/personalizar/base" /> } />
                  <Route path='base' element={ <Base ingredientes={ingredientes} setIngredientes={ setIngredientes } setTotal={ setTotal } />  } />
                  <Route path='pasabocas' element={ <Pasabocas ingredientes={ingredientes} setIngredientes={ setIngredientes }  setTotal={ setTotal } /> } />
                  <Route path='dulces' element={ <Dulces ingredientes={ingredientes} setIngredientes={ setIngredientes }  setTotal={ setTotal } /> } />
                  <Route path='refrescos' element={ <Refrescos ingredientes={ingredientes} setIngredientes={ setIngredientes } setTotal={ setTotal } /> } />
                  <Route path='bombas' element={ <Bombas ingredientes={ingredientes} setIngredientes={ setIngredientes  } setTotal={ setTotal } /> } />
                  <Route path='peluches' element={ <Peluches ingredientes={ingredientes} setIngredientes={ setIngredientes }  setTotal={ setTotal } /> } />
                </Route>
                
                <Route path='/carrito' element={ <Carrito />} />
                  <Route path='/detalle-producto/:id' element={ <Detalles />} />
                <Route path='/listado' element={ <Listado />} />
                <Route path='*' element={ <Error />} />
            </Routes>
        </main>

        <Footer />
    </BrowserRouter>
  )
}
