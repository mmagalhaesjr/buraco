import styled from "styled-components";

export const StyledEstruturapontos = styled.div`
    width: 100%;
    max-width: 600px;
    height: fit-content;
    background-color: ${(prop) => prop.cor === "vulneravel" ? '#ff0606ff' : '#f8f8f895'};
    padding-bottom: 5px;
   

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .caixaInfo {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        gap: 20px;
    }

    .coluna {
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
      
    }

    h3 {
        font-weight: bold;
        font-size: 1.3rem;
        margin-bottom: 10px;
    }
    h2{
        color: ${(prop) => prop.cor == "vulneravel" ? '#ffffffff' : '#000000'};
    }

    input {
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

    button {
        width: 100%;
        border-radius: 30px;
        height: 50px;
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(75,96,69,1) 35%, rgba(0,0,0,1) 100%);
        color: #ffffff;
        font-size: 1rem;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 1s ease;

        &:hover {
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 35%, rgba(75,96,69,1) 100%);
        }
    }

    @media (max-width: 600px) {
        form {
            width: 100%;
        }
    }
`;
