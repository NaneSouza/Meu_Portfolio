import React from "react"
import Vnw from "./imagensPorfolio/vnw.png"
import * as S from "./Style.jsx"



function Footer(){
    return(
       
    <S.Secfooter>
    <div>
    <h2>© Abril, 2024. Site criado pela aluna Elaine Souza.</h2>
    <h3>Projeto Final do Módulo II do Curso Desenvolvimento Front-end Vai na Web.</h3>
    </div>
    <img src={Vnw} alt="logo do vai na web" />
    </S.Secfooter>  
   
    )
  }
  export default Footer

