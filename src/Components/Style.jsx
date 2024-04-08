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
text-shadow: 0 0 10px rgba(201, 88, 201, 0.5);
-webkit-box-reflect: below 1px linear-gradiente(transparent, #915fd1);
line-height: 1rem;
outline: none;
animation: animate 2s linear infinite;
}
@keyframes animate 
{

    0%,100%

{
color: #807a81;
text-shadow: none;
}
18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%
{
color: white;
text-shadow: 0 0 10px #8d3da1,
0 0 20px #8d3da1,
0 0 40px #8d3da1,
0 0 80px #8d3da1,
0 0 160px #8d3da1;
}
    


}

a:hover{
    color: rgba(201, 88, 201, 0.5);
    font-size: 1.9rem;
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
width: 21vw;
height: 45vh; 


}

h2{
    color: white;
}

@media(min-width: 320px) and (max-width: 768px){
border: solid 0.5rem rgba(201, 88, 201, 0.498);
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
height: 85vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
background-color: white;
margin-bottom: 1.5rem;
padding: 1rem;


@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: auto;
    }


    h2{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}


img{
    width: 6vw;
    height: 10vh;
    padding:  0.5rem;

    @media (min-width: 320px) and (max-width: 768px) {
            width: 25%;
            height: auto;
        }
}


`

export const DivEstudos = styled.div`

width: 30vw;
height: 90vh;
display: flex;
align-items: center;
justify-content:space-evenly; 
text-align: center;
padding: 1rem;  

@media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            height: auto;
        }
    
        
    h3{
    font-size: 1rem;
    color: black;
    padding:  1rem;
} 

h4{
    font-size: 0.7rem;
    color: black;
    padding:  1rem;
}

`

export const Habilidades = styled.section`
width: 30vw;
height: 85vh;
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

h2{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}
h4{
    font-size: 1rem;
    color: black;
    padding: 0.5rem;
}

`

export const Profissional = styled.section`
width: 30vw;
height: 85vh;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-image: url(${Designer});
background-size: cover;
background-size: no-repeat;
padding: 1rem;

h2{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}

h4{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}


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
grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
grid-gap: 1rem;
justify-content: center;
background-color: black;
padding: 2rem;
text-align: center;



img{
    margin: 0.5rem;
    border: solid 0.4rem rgba(201, 88, 201, 0.5);
    width: 40vw;
    height: 55vh;
}

h2{
color: white;
font-size: 1.0rem;

}

h3{
color: white;
font-size: 0.9rem;

}


    @media (min-width: 320px) and (max-width: 768px) { img{ 
    width: 40%;
    /* height: 10vh; */
    }
}

`
export const DivProj2 = styled.div`
    border: solid 0.1rem rgba(201, 88, 201, 0.2);
    box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
    margin-bottom: 1.5rem;

`
//---------galeria - Projetos (Dev Front-end)

export const DivProj1 = styled.div`
    border: solid 0.1rem rgba(201, 88, 201, 0.2);
    box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
    margin-bottom: 1.5rem;

`




export const Fotos = styled.section`
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
grid-gap: 1rem;
justify-content: center;
background-color: black;
padding: 2rem;
text-align: center;



img{
    margin: 0.5rem;
    border: solid 0.4rem rgba(201, 88, 201, 0.5);
    width: 35vw;
    height: 65vh;
}

h2{
color: white;
font-size: 1.0rem;

}

h3{
color: white;
font-size: 0.9rem;

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


