import { VideoBackground } from "./styled";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import video1 from "../../assets/video1.mp4";

export default function Video1() {
    const videoRef = useRef(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        // Define um timer para navegar após 7 segundos
        const timer = setTimeout(() => {
            navigate("/video2"); 
        }, 7000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <VideoBackground ref={videoRef} autoPlay muted>
            <source src={video1} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
        </VideoBackground>
    );
}
