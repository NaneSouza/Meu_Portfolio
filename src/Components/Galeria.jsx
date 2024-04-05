import React from 'react'
import Imagem from "./imagensPorfolio/perfil.png"
import * as S from "./Style.jsx"

function Galeria(){
    return(
        <S.Fotos>
       <figure> 
        <img src={Imagem} alt="" /> 
        <figcaption>Descrição da imagem</figcaption> 

        <img src={Imagem} alt="" /> 
        <figcaption>Descrição da imagem</figcaption> 

        <img src={Imagem} alt="" /> 
        <figcaption>Descrição da imagem</figcaption> 

        <img src={Imagem} alt="" /> 
        <figcaption>Descrição da imagem</figcaption> 
        </figure>
       
        </S.Fotos>
    )
}

export default Galeria