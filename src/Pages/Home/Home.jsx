import { StyledHome } from "./styled";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [numeroEquipes, setNumeroEquipes] = useState(2);
    const [pontuacaoMaxima, setPontuacaoMaxima] = useState('');
    const [tipoJogo, setTipoJogo] = useState('200');

    const navigate = useNavigate();

    function salvarDados(event) {
        event.preventDefault();
        navigate('/nome');

        // Criar objeto com os dados
        const dadosConfiguracoes = {
            numeroEquipes,
            pontuacaoMaxima,
            tipoJogo,
        };

        // localStorage.setItem("name","jhu")
        // const name = localStorage.getItem('name')
        // localStorage.removeItem("name")
        // localStorage.clear();

        // Salvar no localStorage passando os dados para JSON
        localStorage.setItem('dadosConfiguracoes', JSON.stringify(dadosConfiguracoes));
    }

    const inputNumeroEquipes = (event) => {
        setNumeroEquipes(Number(event.target.value));
    };

    const inputPontuacaoMaxima = (event) => {
        setPontuacaoMaxima(Number(event.target.value));
    };

    const inputTipoJogo = (event) => {
        setTipoJogo(event.target.value);
    };

    return (
        <StyledHome>
            <Header />
            <h1>CONFIGURAÇÕES</h1>
            <form onSubmit={salvarDados}>
                <div className="caixaInput">
                    <h2>Número de equipes: </h2>
                    <input type="text" value={numeroEquipes} onChange={inputNumeroEquipes} />
                </div>

                <div className="caixaInput">
                    <h2>Pontuação máxima: </h2>
                    <input type="text" value={pontuacaoMaxima} onChange={inputPontuacaoMaxima} />
                </div>

                <div className="caixaInput">
                    <h2>Tipo de jogo: </h2>

                    <div className="inputRadio">
                        <input
                            type="radio"
                            name="tipoJogo"
                            value="200"
                            checked={tipoJogo === "200"}
                            onChange={inputTipoJogo}
                        />
                        <p>200</p>
                    </div>

                    <div className="inputRadio">
                        <input
                            type="radio"
                            name="tipoJogo"
                            value="1000"
                            checked={tipoJogo === "1000"}
                            onChange={inputTipoJogo}
                        />
                        <p>1000</p>
                    </div>
                </div>

                <button type="submit">ENVIAR</button>
            </form>
        </StyledHome>
    );
}
