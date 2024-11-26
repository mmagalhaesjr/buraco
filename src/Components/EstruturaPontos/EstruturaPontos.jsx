import { useState, useEffect, useRef } from "react";
import { StyledEstruturapontos } from "./styled";
import audio from '../../assets/vul.mp3'

export default function EstruturaPontos(prop) {
    const [pontosJogo, setPontosJogo] = useState('');
    const [pontosMesa, setPontosMesa] = useState('');
    const [morto, setMorto] = useState(false);
    const [batida, setBatida] = useState(false);
    const [totalPontos, setTotalPontos] = useState(0);
    const [cor, setCor] = useState(undefined);
    const audioRef = useRef(null); 

    // Atualizar o localStorage sempre que o totalPontos mudar
    useEffect(() => {
        localStorage.setItem('totalPontos', JSON.stringify(totalPontos));
    }, [totalPontos]);

    // Obter dados do localStorage (pontuacaoMaxima) sempre que o componente renderizar
    const PontuacaomaximaLocalStorage = localStorage.getItem("dadosConfiguracoes");
    const pontuacao = PontuacaomaximaLocalStorage ? JSON.parse(PontuacaomaximaLocalStorage) : null;

    // UseEffect para verificar se a pontuação atingiu a vulnerabilidade
    useEffect(() => {
        if (pontuacao && pontuacao.pontuacaoMaxima / 2 <= totalPontos) {
            setCor("vulneravel"); 
            if (audioRef.current) {
                audioRef.current.play(); 
            }
        }
    }, [totalPontos, pontuacao]);

    const inputPontosJogo = (event) => {
        setPontosJogo(Number(event.target.value));
    };

    const inputPontosMesa = (event) => {
        setPontosMesa(Number(event.target.value));
    };

    const inputMorto = (event) => {
        setMorto(event.target.checked);
    };

    const inputBatida = (event) => {
        setBatida(event.target.checked);
    };

    function somar(event) {
        event.preventDefault();

        let total = pontosJogo + pontosMesa;

        if (!morto) {
            total -= 100;
        }

        if (batida) {
            total += 100;
        }

        setTotalPontos((totalAcumulado) => totalAcumulado + total);

        setPontosJogo('');
        setPontosMesa('');
        setMorto(false);
        setBatida(false);
    }

    return (
        <StyledEstruturapontos cor={cor}>
           
            <audio ref={audioRef} src={audio} />

            <h3>{`${prop.nome1} / ${prop.nome2}`}</h3>

            <form className="caixaInfo" onSubmit={somar}>
                <div className="coluna">
                    <h2>Pontos de canastras:</h2>
                    <input 
                        type="text" 
                        value={pontosJogo} 
                        onChange={inputPontosJogo} 
                    />
                </div>
                <div className="coluna">
                    <h2>Pontos de mesa:</h2>
                    <input 
                        type="text" 
                        value={pontosMesa} 
                        onChange={inputPontosMesa} 
                    />
                </div>

                <div className="coluna">
                    <h2>Morto:</h2>
                    <input 
                        type="checkbox" 
                        name="morto" 
                        checked={morto} 
                        onChange={inputMorto} 
                    />
                </div>
                <div className="coluna">
                    <h2>Batida:</h2>
                    <input 
                        type="checkbox" 
                        name="batida" 
                        checked={batida} 
                        onChange={inputBatida} 
                    />
                </div>

                <div className="coluna">
                    <button type="submit">SOMAR</button>
                </div>
                <div className="coluna">
                    <h2>Total Acumulado:</h2>
                    <h1>{totalPontos}</h1> 
                </div>
            </form>
        </StyledEstruturapontos>
    );
}
