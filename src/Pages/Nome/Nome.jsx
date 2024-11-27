import { StyledNome } from "./styled";
import Header from '../../Components/Header/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nome() {
    const pegarDadosLocalStorage = localStorage.getItem("dadosConfiguracoes");
    const dadosObjetos = JSON.parse(pegarDadosLocalStorage);

    

    const numeroEquipes = dadosObjetos?.numeroEquipes || 0;

    // Inicializa o estado com base no número de equipes
    const [equipes, setEquipes] = useState(
        Array.from({ length: numeroEquipes }, () => ({ jogador1: "", jogador2: "" }))
    );

    const navigate = useNavigate();

    // Atualiza os valores dos inputs dinamicamente
    const handleInputChange = (e, index, jogador) => {
        const novasEquipes = [...equipes];
        novasEquipes[index][jogador] = e.target.value;
        setEquipes(novasEquipes);
    };

    // Salva os dados atualizados no localStorage
    const atualizarObjetoLocalStorage = (event) => {
        event.preventDefault();
        navigate('/pontos');

        const novosDados = {
            ...dadosObjetos,
            equipes, // Adiciona os dados das equipes ao objeto existente
        };

        localStorage.setItem("dadosConfiguracoes", JSON.stringify(novosDados));
        // console.log("Dados atualizados no localStorage:", novosDados);
    };

    return (
        <StyledNome>
            <Header />

            <h1>NOME DOS JOGADORES</h1>

            <form onSubmit={atualizarObjetoLocalStorage}>
                {equipes.map((equipe, index) => (
                    <div className="caixaNome" key={index}>
                        <h2>EQUIPE: {index + 1}</h2>

                        <div className="cxInput">
                            <h2>JOGADOR 1:</h2>
                            <input
                                type="text"
                                value={equipe.jogador1}
                                onChange={(e) => handleInputChange(e, index, "jogador1")}
                            />
                        </div>

                        <div className="cxInput">
                            <h2>JOGADOR 2:</h2>
                            <input
                                type="text"
                                value={equipe.jogador2}
                                onChange={(e) => handleInputChange(e, index, "jogador2")}
                            />
                        </div>
                    </div>
                ))}

                <div className="cxBotao">
                    <button type="submit">PROXIMO</button>
                </div>
            </form>
        </StyledNome>
    );
}
