import React from "react"
import Imagem from "./imagensPorfolio/perfil.png"
import * as S from "./Style.jsx"

function Projetos(){
return(
    <S.Projectsect>
    
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
    </S.Projectsect>
)

}

export default Projetos