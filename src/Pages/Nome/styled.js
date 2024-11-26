import styled from "styled-components";

export const StyledNome = styled.main`
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



form{
    width: 90%;
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.caixaNome{
    width: 90%;
    max-width: 600px;
    /* border: solid 2px #ffffff; */
    background-color: #f8f8f895;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.caixaNome h2{
    margin: 10px;
}

.cxInput{
    display: flex;
    align-items: center;
    justify-content: center;
}
.cxInput input{
    height: 30px;
    border: none;
    outline: none;
    padding-left: 10px;
}
input[type="text"] {
    font-weight: bold;
    font-size: 1rem;
}

.cxBotao{
    width: 100%;
    max-width: 600px;
  

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
}

button{
    width: 90%;
    height:50px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,96,69,1) 35%, rgba(0,0,0,1) 100%);
    color: #ffffff;
    font-size: 1.5rem;
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

form{
    width: 100%;
}
}


`