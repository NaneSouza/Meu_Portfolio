import styled from "styled-components"
import Designer from "./imagensPorfolio/designer.png"

//----Estilização da Navegação

export const Nav = styled.nav`
background-color: black;
font-family: "Calligraffitti", cursive;
`

export const Ul = styled.ul`
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;
/* background-color: black; */

/* background-color: rgba(201, 88, 201, 0.5); */

a{
font-size: 1.5rem;
text-decoration: none;
color: white;
border-radius:5%;
padding: 0.5rem;
box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
}

a:hover{
    color: rgba(201, 88, 201, 0.5);
    font-size: 1.6rem;
}



@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;
    border: solid 0.5rem rgba(201, 88, 201, 0.5);
    /* border: solid red; */

    a{
        font-size: 2rem;
    }



}


`



//----Estilização do Início

export const SectionInicio = styled.section`
height: 80vh; 
display: flex;
justify-content: space-evenly;
align-items: center;
/* padding: 3rem; */
background-color: black;

img{
    border-radius: 30%;
    transform: scale(1.1);
    box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
    margin-bottom: 2rem;
width: 20vw;
height: 45vh; 


}

h2{
    color: white;
}

@media(min-width: 320px) and (max-width: 768px){
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
flex-direction: column;   

img{
    width: 50vw;
    margin-top: 2rem;
}

}

`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height:40vh; 

@media(min-width: 320px) and (max-width: 768px){

h2{
    text-align: center;
    font-size: 2rem;
}

    img{
        width: 20vw;
    }
}
`


export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;



@media (min-width: 320px) and (max-width: 768px){ 
    h2{
         text-align: center;
         font-size: 1rem; }
    }

    
`


export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
animation: pulse 2s infinite;

a {
 text-decoration: none;
 color: black;
 transition: transform 0.3s ease-in-out;
 
 &:hover {
  transform: scale(1.2);
}
}
img{
width: 4vw;
height: 9vh; 
padding: 0.5rem;
}







@media (min-width: 320px) and (max-width: 768px){ 
    h2{
         text-align: center;
         font-size: 1rem; }

         img{
        width: 10vw;
    }
    }
`

//----Estilização do Sobre

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;
    background-color: black;

    @media (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }
`


export const Estudos = styled.section`
width: 30vw;
height: 70vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
padding: 1rem;
background-color: white;

@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: auto;
    }


div{
width: 30vw;
height: 70vh;
/* display: flex;
align-items: center;
justify-content:space-evenly; */
padding: 1rem;

@media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            height: auto;
        }
}

img{
    width: 6vw;
    height: 10vh;

    @media (min-width: 320px) and (max-width: 768px) {
            width: 25%;
            height: auto;
        }
}

/* h3{
    font-size: 0,5rem;
    color: black;
} */

/* h4{
    font-size: 0,2rem;
    color: black;
} */


`


export const Habilidades = styled.section`
width: 30vw;
height: 70vh;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
padding: 1rem;
background-color: white;

@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: auto;
    }


div{
width: 30vw;
height: 70vh;
display: flex;
align-items: center;
justify-content:left;
padding-left: 2rem;

@media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            height: auto;
            padding: 0.5rem;
        }
}

img{
    width: 5vw;
    height: 10vh;

    @media (min-width: 320px) and (max-width: 768px) {
            width: 15%;
            height: auto;
            
        }
}

h4{
    font-size: 1rem;
    color: black;
    padding: 0.5rem;
}

`

export const Profissional = styled.section`
width: 30vw;
height: 70vh;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-image: url(${Designer});
background-size: cover;
background-size: no-repeat;
padding: 1rem;

@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: auto;
    }

div{
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-color: black;
opacity: 0.6;
}


h2{
    text-align: center;
    
}

h4{
    font-size: 2rem;
    color: white;
    font-weight: bold;
    padding: 1.5rem;

    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 1.5rem;
        }
}
/* 
img{
    width: 10vw;
    height: 22vh; 

    @media (min-width: 320px) and (max-width: 768px) {
            width: 50%;
            height: auto;
        }
} */

`


//---------projetos - Projetos (Design Digital)



export const Projectsect = styled.section`
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
justify-content: center;
background-color: black;
padding: 2rem;

img{
    /* margin: 2rem; */
    border: solid 0.5rem rgba(201, 88, 201, 0.5);
    width: 30vw;
    height: 55vh;
    padding: 0.5rem;
}

figcaption{
text-align: center;
font-size: 1.2rem; 
color: white; 
display: flex;
justify-content: center;

}

    @media (min-width: 320px) and (max-width: 768px){ 
    
    img{ 
    width: 40%;
    /* height: 10vh; */
    }
}

`

//---------galeria - Projetos (Dev Front-end)

export const Fotos = styled.section`
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1rem;
justify-content: center;
background-color: black;
padding: 2rem;
flex-direction:column;

img{
    margin: 0.5rem;
    border: solid 0.5rem rgba(201, 88, 201, 0.5);
    width: 30vw;
    height: 55vh;
}

figcaption{
text-align: center;
font-size: 1.2rem; 
color: white; 
display: flex;
justify-content: center;

}

    @media (min-width: 320px) and (max-width: 768px) { img{ 
    width: 40%;
    /* height: 10vh; */
    }
}

`

export const Secfooter = styled.footer` 
background-color: black; 
color: white; 
display: flex; 
justify-content: center; 
align-items: center; 
padding: 1rem; 
box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
/* margin-top: 2rem; */

h2{
    font-size: 1rem;
    color: white;
    padding: 0.5rem;
}
@media (min-width: 320px) and (max-width: 768px){ 
    flex-direction: column; 
    border: solid 0.5rem rgba(201, 88, 201, 0.6);
    
    h2{ 
    font-size: 1rem; 
    text-align: center; 
} 
} 


`


