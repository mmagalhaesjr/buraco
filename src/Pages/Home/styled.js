import styled from "styled-components";

export const StyledHome = styled.main`
width: 100vw;
height: 90vh;


/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); */
/* border: solid 2px #ffffff; */

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;



form{
    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
h1{
   
}
h2{
    font-size: 1.5rem;
}
.caixaInput{
    width: 80%;
    margin-top: 2rem;

    display: flex;
    align-items: left;
    justify-content: space-between;
}


input{
    height: 50px;
    width: 100px;
    border: none;
    outline: none;
    padding-left: 10px;
}

input[type="text"] {
    font-weight: bold;
    font-size: 2rem;
}

.inputRadio{
    display: flex;
    align-items: center;
    justify-content: center;
}
.inputRadio input{
    height: 30px;
    width: 30px;
}
.inputRadio p{
    margin-left: 10px;
    font-weight: bold;
}


button{
    width: 80%;
    height:50px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,96,69,1) 35%, rgba(0,0,0,1) 100%);
    color: #ffffff;
    font-size: 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 2rem;
    transition: all 1s ease; 

    &:hover{
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(75,96,69,1) 100%);
        
    }
}


  
@media (max-width:600px) {
width: 100%;
form{
    width: 100%;
}
}

`