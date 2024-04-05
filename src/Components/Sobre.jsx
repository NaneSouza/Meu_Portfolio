import React from "react"
import Vnw from "./imagensPorfolio/vnw.png"
import Css from "./imagensPorfolio/css.png"
import Js from "./imagensPorfolio/js.png"
import Html from "./imagensPorfolio/html.png"
import Styledlogo from "./imagensPorfolio/styled.png"
import Reactlogo from "./imagensPorfolio/react.png"
import UFMS from "./imagensPorfolio/logoUFMS.png"
import * as S from "./Style.jsx"

function Sobre() {
    return (
        <S.Sobre>

            <S.Estudos>
                <h2> ESTUDOS</h2>

                <div>
                    <h3>Desenvolvimento front-end</h3>
                    <h4>AGO/2023 - MAIO/2024</h4>

                    <img src={Vnw} alt="logo do vai na web" />
                </div>

                

                <div>
                    <h3>Acadêmica de Tecnologia em Gestão de Mídias Sociais Digitais (EAD)</h3>
                    <h4>MAR/2024 - DEZ/2025</h4>

                    <img src={UFMS} alt="logo da UFMS" />
                </div>

                

            </S.Estudos>

            <S.Habilidades>
                <h2> HABILIDADES</h2>

                <div>
                    <img src={Html} alt="logo do html5" />
                    <h4>HTML</h4>
                </div>
                
                <div>
                    <img src={Css} alt="logo do css" />
                    <h4>CSS</h4>
                </div>

                <div>
                    <img src={Js} alt="logo do javascript" />
                    <h4>JavaScript</h4>
                </div>

                <div>
                    <img src={Reactlogo} alt="logo do react" />
                    <h4>React</h4>
                </div>

                <div>
                    <img src={Styledlogo} alt="logo do styled-components" />
                    <h4>Styled-Components</h4>
                </div>

            </S.Habilidades>

            <S.Profissional>
                <h2> PROFISSIONAL</h2>
                <div>
                    <h4> Designer Digital, Desenvolvedora Front-End e Social Media</h4>
                                     
                </div>

            </S.Profissional>

        </S.Sobre>
    )
}

export default Sobre