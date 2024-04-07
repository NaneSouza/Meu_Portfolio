import React from "react"
import Idealize from "./imagensPorfolio/Idealize.png"
import Imagem from "./imagensPorfolio/perfil.png"
import * as S from "./Style.jsx"

function Projetos(){                //---------projetos - Projetos (Design Digital)
return(
    <S.Projectsect>
    
    <S.Fotos>
    <figure> 
        <img src={Idealize} alt="" /> 
        <figcaption>Site criado como Projeto de conclusão de módulo do Curso Descodificadas. (HTML e CSS)</figcaption> 

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