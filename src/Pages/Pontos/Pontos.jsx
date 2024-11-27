import EstruturaPontos from "../../Components/EstruturaPontos/EstruturaPontos";
import Header from "../../Components/Header/Header";
import { StyledPontos } from "./styled";

export default function Pontos() {

    const pegarDadosLocalStorage = localStorage.getItem("dadosConfiguracoes");
    const dadosObjetos = JSON.parse(pegarDadosLocalStorage);



    return (
        <StyledPontos>

            <Header />

            <h1 className="titulo">Controle de pontos</h1>

            {dadosObjetos.equipes.map((obj,index) => (
                <EstruturaPontos
                    key={index}
                    nome1={obj.jogador1}
                    nome2={obj.jogador2}

                />
            ))}





        </StyledPontos >
    )
}