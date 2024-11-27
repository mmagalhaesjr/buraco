import styled from "styled-components";

export const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;

    
`;

export const Texto = styled.div`
width: 100%;
height: 100vh;

h1{
    color: #ffffff;
    font-size: 3rem;
    position: relative;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-shadow: 
    -1px -1px 0 #058923, 
    1px -1px 0 #058923,  
    -1px 1px 0 #058923,  
    1px 1px 0 #058923; 
}

`
