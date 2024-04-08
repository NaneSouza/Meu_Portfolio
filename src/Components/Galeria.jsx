import React from 'react'
import Idealize from "./imagensPorfolio/Idealize.png"
import Fantastika from "./imagensPorfolio/Fantastika.png"
import LojaPet1 from "./imagensPorfolio/LojaPet1.png"
import ODS12 from "./imagensPorfolio/ODS12.png"
import Mulheres from "./imagensPorfolio/MulheresnaProg.png"
import Cardapio from "./imagensPorfolio/Cardápio.png"
import Portfolio1 from "./imagensPorfolio/Portfólio1.png"
import Animaheart from "./imagensPorfolio/animaheart.png"
import Contador from "./imagensPorfolio/Contador.png"
import CN from "./imagensPorfolio/CN.png"

import * as S from "./Style.jsx"

function Galeria(){    //---------galeria - Projetos (Dev Front-end)
    return(
        <S.Fotos2>

<S.DivProj2> 
       <a href="https://nanesouza.github.io/cardapio-restaurante/" target="_blank">
       <img src={Cardapio} alt="Imagem da página Inicial do Cardápio de Restaurante" /> 
       </a>
       <h2>Site desenvolvido durante o curso Meu primeiro site, promovido pelo Projeto Elas na Tech e pela Junior Achievement Brasil e Microsoft.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 

<S.DivProj2> 
       <a href="https://nanesouza.github.io/mulheresnaprog2/" target="_blank">
       <img src={Mulheres} alt="Imagem da página Inicial do Site Mulheres na Programação" /> 
       </a>
       <h2>Site desenvolvido durante o curso Meu primeiro site, promovido pelo Projeto Elas na Tech e pela Junior Achievement Brasil e Microsoft.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 

<S.DivProj2> 
       <a href="https://nanesouza.github.io/Desafio3/" target="_blank">
       <img src={ODS12} alt="Imagem da página Inicial do Site sobre ODS12" /> 
       </a>
        <h2>Site desenvolvido durante o curso Meu primeiro site, promovido pelo Projeto Elas na Tech e pela Junior Achievement Brasil e Microsoft.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://nanesouza.github.io/Descod-Tarefa10-Animaheart/" target="_blank">
       <img src={Animaheart} alt="Imagem da página Inicial do site Animaheart" /> 
       </a>
       <h2>Site desenvolvido durante o curso promovido pelo Projeto Descodificadas.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 


        <S.DivProj2> 
       <a href="https://nanesouza.github.io/" target="_blank">
       <img src={Portfolio1} alt="Imagem da página Inicial do Meu Primeiro Portfólio" /> 
       </a>
       <h2>Site desenvolvido como Desafio Final para a conclusão do curso Meu primeiro site, promovido pelo Projeto Elas na Tech e pela Junior Achievement Brasil e Microsoft.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 










       <S.DivProj2>        
       <a href="https://nanesouza.github.io/ProjFinalDescodsite/" target="_blank">
       <img src={Idealize} alt="Imagem da página Inicial do Site Idealize" /> 
       </a>
        <h2>Site criado como Projeto de conclusão da Trilha 1 do Projeto Descodificadas.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2>

       
        
         <S.DivProj2> 
       <a href="https://nanesouza.github.io/LojaPet/" target="_blank">
       <img src={LojaPet1} alt="Imagem da página Inicial do Site Pet Wedding" /> 
       </a>
        <h2>Site criado como Projeto para o Curso Vai na Web.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://nanesouza.github.io/ProjFinalVnWM1/" target="_blank">
       <img src={Fantastika} alt="Imagem da página Inicial do Site Fantastika" /> 
       </a>
        <h2>Site criado como Projeto de conclusão de Módulo I do Curso Vai na Web.</h2> 
        <h3>Base do desenvolvimento: HTML e CSS.</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://projetoreactlojapet24.vercel.app/" target="_blank">
       <img src={Contador} alt="Imagem da página Inicial do Site Pets com contador" /> 
       </a>
        <h2>Site criado como Projeto do Curso Vai na Web - Mod II.</h2> 
        <h3>Base do desenvolvimento: HTML, CSS, JavaScript, React.</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://projeto-cn-24.vercel.app/" target="_blank">
       <img src={CN} alt="Imagem da página Inicial do Site Cartoon Network" /> 
       </a>
        <h2>Site criado como Projeto do Curso Vai na Web - Mod II.</h2> 
        <h3>Base do desenvolvimento: HTML, CSS, JavaScript, React.</h3>
        </S.DivProj2> 


        
       
        </S.Fotos2>
    )
}

export default Galeria