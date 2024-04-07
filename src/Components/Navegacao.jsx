import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Galeria from "./Galeria.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegacao() {
    return (
        <>
            <BrowserRouter>
                <S.Nav>
                    <S.Ul>

                        <li> <Link to="/"> Inicio </Link>  </li>
                        <li> <Link to="/Sobre"> Sobre </Link>   </li>
                        <li> <Link to="/Projetos"> Projetos (Design Digital) </Link>  </li>
                        <li> <Link to="/Galeria"> Projetos (Dev Front-end) </Link> </li>
                    </S.Ul>
                </S.Nav>


                <Routes>
                   
                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Projetos" element={<Projetos />} />
                    <Route path="Galeria" element={<Galeria />} />

                </Routes>

            </BrowserRouter>

        </>

    )
}
export default Navegacao