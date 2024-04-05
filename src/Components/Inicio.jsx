import React from "react"
import Perfil from "./imagensPorfolio/perfil.png"
import Instagram from "./imagensPorfolio/instagram.png"
import Git from "./imagensPorfolio/github.png"
import Linkedin from "./imagensPorfolio/linkedin.png"
import * as S from "./Style.jsx"

function Inicio() {
    return (

        <S.SectionInicio>
            <img src={Perfil} alt="Foto do perfil" />

            <S.ContainerDivs> 
                <S.BoxInicio>
                    <h2> Olá, tudo bem?</h2>
                    <h2>Aqui é a Elaine Souza (Nane)</h2>
                    <h2>Bem-vindos ao meu portfólio.</h2>
                </S.BoxInicio>
                <S.BoxInicio2>
                
                <a href="https://www.instagram.com/elainesouza.19/" target="_blank">
                <img src={Instagram} alt="logo do instagram" />
                </a>
                    
                <a href="https://github.com/NaneSouza" target="_blank">
                <img src={Git} alt="logo do GitHub" />
                </a>   

                <a href="https://www.linkedin.com/in/elaine-maria-de-souza-pereira-coelho-463643275/" target="_blank">
                <img src={Linkedin} alt="logo do linkedin" />
                </a>
                </S.BoxInicio2>
            </S.ContainerDivs>

        </S.SectionInicio>
    )
}

export default Inicio