import { VideoBackground, Texto } from "./styled";
import { useRef } from "react";
import video2 from "../../assets/video2.mp4";

export default function Video2() {
    const videoRef = useRef(null);

    //Dados do localStorage
    const pegarDadosLocalStorage = localStorage.getItem("dadosConfiguracoes");
    const dadosObjetos = pegarDadosLocalStorage ? JSON.parse(pegarDadosLocalStorage) : null;

    console.log(dadosObjetos?.equipes);

    return (
        <Texto>
            {dadosObjetos.equipes.map((obj, index) => (
                    <h1 key={index}>
                        {obj.jogador1} / {obj.jogador2}
                    </h1>
                ))}

            <VideoBackground ref={videoRef} autoPlay muted>
                <source src={video2} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </VideoBackground>
        </Texto>
    );
}
