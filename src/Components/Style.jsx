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
        font-size: 1rem;
    }
    a:hover{
    color: rgba(201, 88, 201, 0.5);
    font-size: 1.2rem;
}

}


`



//----Estilização do Início

export const SectionInicio = styled.section`
height: 80vh; 
display: flex;
justify-content:space-evenly;
align-items: center;
background-color: black;

img{
border-radius: 30%;
transform: scale(1.1);
box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
margin-bottom: 2rem;
width: 21vw;
height: 45vh; 

}

h1{
    color: white;
    font-size: 2.5rem;
    text-align: center;
    margin: 0 0 2rem 0;
}

h2{
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 0 0 1rem 0;
}

h3{
    color: white;
    font-size: 2rem;
    text-align: center;
    padding: 0 0 1rem 0;
}

@media(min-width: 320px) and (max-width: 768px){

height:90vh;
border: solid 0.5rem rgba(201, 88, 201, 0.498);
display: flex;
flex-direction: column;   

img{
    width: 30vw;
    margin-top: 2rem;
}
h1{
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 0 2rem 0;
}

h2{
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 0 0 1rem 0;
}

h3{
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 0 0 1rem 0;
}

}

`

export const ContainerDivs = styled.section`
width: 50vw;
height:50vh; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media(min-width: 320px) and (max-width: 768px){
height: 70vh;

}
`


export const BoxInicio = styled.div`
width: 40vw;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding:  1rem 0 1rem 0;




@media (min-width: 320px) and (max-width: 768px){ 
    width: 40vw;
    height: 20vh;
    }

    
`

export const BoxInicio2 = styled.div`

width: 20vw;
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
animation: pulse 2s infinite;
padding:  1.8rem 0 0 0;


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
    height: 20vh;
    width: 50vw;
    margin: 2rem;

    
    h2{
         text-align: center;
         font-size: 1rem; }

img{
width: 12vw;
height: 8%.5; 
padding: 0.5rem;
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
height: 95vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
background-color: white;
margin-bottom: 1.5rem;



@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;;
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
height: 95vh;
display: flex;
align-items: center;
justify-content:space-evenly; 
text-align: center;
padding: 0 1rem 0 1rem;


  
        
    h3{
    font-size: 1rem;
    color: black;
    padding:  1rem;
} 

h4{
    font-size: 0.9rem;
    color: black;
    padding:  1rem;
    
}

@media (min-width: 320px) and (max-width: 768px) {
            width: 100%;
            height: auto;


            h3{
    font-size: 0.8rem;
    color: black;
    padding:  0.5rem;
} 

h4{
    font-size: 0.8rem;
    color: black;
    padding:  0.5rem;
    
}
        }

`

export const Habilidades = styled.section`
width: 30vw;
height: 95vh;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
background-color: white;

@media (min-width: 320px) and (max-width: 768px) {
        width: 100%;
        height: auto;
    }


div{
width: 30vw;
height: 95vh;
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
height: 95vh;
border: solid 0.5rem rgba(201, 88, 201, 0.5);
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-image: url(${Designer});
background-size: cover;
background-size: no-repeat;
/* padding: 1rem; */

h2{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}

h4{
    text-shadow: 0 0 10px rgba(201, 88, 201);

}


@media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    height: 60vh;
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


`


//---------projetos - Projetos (Design Digital)

export const DivProj1 = styled.div`
    border: solid 0.1rem rgba(201, 88, 201, 0.2);
    box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
    margin-bottom: 1.5rem;
    
    
    /* @media (min-width: 320px) and (max-width: 768px) {
  width: 100%;
  height: auto;
} */
       


`


export const Fotos1 = styled.section`
display: grid; 
grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
grid-gap: 1rem;
justify-content: center;
background-color: black;
padding: 2rem;
text-align: center;
/* border: solid red; */



img{
    margin: 0.5rem;
    border: solid 0.4rem rgba(201, 88, 201, 0.5);
    width: 40vw;
    height: 65vh;
}

h2{
    color: white;
font-size: 1.0rem;
padding: 0.6rem;
}

h3{
color: white;
font-size: 0.9rem;
padding: 0.6rem;
}


@media (min-width: 320px) and (max-width: 768px) { 
    flex-direction: column; 
    width: auto; 
    height: auto;
    
    img { 
        width: 80%; 
        height: 40%; 
    } 
    
    h2, h3 { 
        text-align: center; 
        font-size: 1rem;
        /* padding: 1rem; */
     }
     }

/* img{ 
    margin: 0.5rem; 
    border: solid 0.4rem rgba(201, 88, 201, 0.5); }

h2{ color: white; 
    font-size: 1.0rem;

}

h3{ color: white; font-size: 0.9rem;

} */

   

`

//---------galeria - Projetos (Dev Front-end)

export const DivProj2 = styled.div`
    border: solid 0.1rem rgba(201, 88, 201, 0.2);
    box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
    margin-bottom: 1.5rem;

`




export const Fotos2 = styled.section`
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
    height: 65vh;
}

h2{
color: white;
font-size: 1.0rem;
padding: 0.6rem;
}

h3{
color: white;
font-size: 0.9rem;
padding: 0.6rem;
}

@media (min-width: 320px) and (max-width: 768px) { 
    flex-direction: column; 
    width: auto; 
    height: auto;
    
    img { 
        width: 80%; 
        height: 40%
    } 
        
        h2, h3 { 
            text-align: center; 
            font-size: 0.9rem; 
            /* padding: 1rem; */
        } 
    }

/* img{ 
    margin: 0.5rem; 
    border: solid 0.4rem rgba(201, 88, 201, 0.5); }

h2{ color: white; 
    font-size: 1.0rem; 
    padding: 0.6rem; }

h3{ color: white; 
    font-size: 0.9rem; 
    padding: 0.6rem; } */

`

export const Secfooter = styled.footer` 
background-color: black; 
color: white; 
box-shadow: 0 0 2rem rgba(201, 88, 201, 0.5);
display: flex; 
justify-content: center; 
align-items: center; 
/* margin-top: 2rem; */

div{
display: flex; 
justify-content: center; 
align-items: center; 
flex-direction: column;
padding: 1rem; 

}


h2{
    font-size: 1rem;
    color: white;
    padding: 0.5rem;
}

h3{
    font-size: 1rem;
    color: white;
    padding: 0.5rem;
}

img{
    margin: 0.5rem;
    width: 4vw;
    height: 8vh;
}

@media (min-width: 320px) and (max-width: 768px){ 
    flex-direction: column; 
    border: solid 0.5rem rgba(201, 88, 201, 0.6);
    
   
h2{
    font-size: 1rem;
    color: white;
    text-align: center; 
    padding: 0.5rem;
}

h3{
    font-size: 1rem;
    color: white;
    text-align: center; 
    padding: 0.5rem;
}

img{
    margin: 0.5rem;
    width: 10vw;
    height: 8vh;
}
} 


`


