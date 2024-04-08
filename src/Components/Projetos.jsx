import React from "react";
import CertSVT from "./imagensPorfolio/CertSVT.png";
import CertAVT from "./imagensPorfolio/CertAVT.png";
import CalendEdit from "./imagensPorfolio/CalendEdit.png";
import RevMark from "./imagensPorfolio/RevMark.png";
import Bolo from "./imagensPorfolio/Bolo.png";
import Hospital from "./imagensPorfolio/Hospital.png";
// import AnivIASD from "./imagensPorfolio/AnivIASD.png";
// import Aliment from "./imagensPorfolio/Aliment.png";
// import Feira from "./imagensPorfolio/Feira.png";
// import Live from "./imagensPorfolio/Live.png";
// import LProjSite from "./imagensPorfolio/LProjSite.png";
// import Ljucy from "./imagensPorfolio/Ljucy.png";
// import Lsvt from "./imagensPorfolio/Lsvt.png";
// import Lcaes from "./imagensPorfolio/Lcaes.png";
// import Lidealize from "./imagensPorfolio/Lidealize.png";
// import LIASDBA from "./imagensPorfolio/LIASDBA.png";
// import VTP from "./imagensPorfolio/VTP.png";
// import VABebe from "./imagensPorfolio/VABebe.png";
// import VRAvt from "./imagensPorfolio/VRAvt.png";
// import VIEsp from "./imagensPorfolio/VIEsp.png";


import * as S from "./Style.jsx";

function Projetos() {
  //---------projetos - Projetos (Design Digital)
  return (
    <S.Projectsect>
      <S.Fotos>
      <S.DivProj2> 
       <a href="https://drive.google.com/file/d/1OVtETL8afzSP9rrzyftfYbzKH3Ec-oWQ/view?usp=drive_link" target="_blank">
       <img src={CertSVT} alt="Imagem de um certificado" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária no Grupo Saúde e Vida Transformada</h2> 
        <h3>Base do desenvolvimento: Canva</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://drive.google.com/file/d/1YzvUCNOP7sOphSeTRytt6WpL9qfU4ERu/view?usp=drive_link" target="_blank">
       <img src={CertAVT} alt="Imagem de um certificado" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária na Igreja Adventista do Sétimo Dia</h2> 
        <h3>Base do desenvolvimento: Canva e Photoshop</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://drive.google.com/file/d/12W0mTXuuP1nftOPVCJKrzflb9qpf9GB_/view?usp=drive_link" target="_blank">
       <img src={CalendEdit} alt="Imagem de um Calendário Editorial" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária.</h2> 
        <h3>Base do desenvolvimento: Canva</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://www.instagram.com/p/Cz7nUuDNoIA/?img_index=1" target="_blank">
       <img src={RevMark} alt="Imagem de Post A Revolução do Marketing Digital" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária.</h2> 
        <h3>Base do desenvolvimento: Canva</h3>
        </S.DivProj2> 



        <S.DivProj2> 
       <a href="https://drive.google.com/file/d/1aM-wYBUvVKeh2l7iWgT35vWwPDzprVee/view?usp=drive_link" target="_blank">
       <img src={Bolo} alt="Imagem de Post de Bolo de Pote" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária.</h2> 
        <h3>Base do desenvolvimento: Canva</h3>
        </S.DivProj2> 

        <S.DivProj2> 
       <a href="https://drive.google.com/file/d/1CtDH1quyi1Tj6ctYY8jXGcmNcjgsEcwH/view?usp=drive_link" target="_blank">
       <img src={Hospital} alt="Imagem de Post Para Hospital Adventista" /> 
       </a>
       <h2>Projeto desenvolvido de forma voluntária.</h2> 
        <h3>Base do desenvolvimento: Canva</h3>
        </S.DivProj2> 


      </S.Fotos>
    </S.Projectsect>
  );
}

export default Projetos;
