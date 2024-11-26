import EstruturaPontos from "../../Components/EstruturaPontos/EstruturaPontos";
import Header from "../../Components/Header/Header";
import { StyledPontos } from "./styled";

export default function Pontos() {

    const pegarDadosLocalStorage = localStorage.getItem("dadosConfiguracoes");
    const dadosObjetos = JSON.parse(pegarDadosLocalStorage);

    console.log(dadosObjetos.equipes)

    return (
        <StyledPontos>

            <Header />


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