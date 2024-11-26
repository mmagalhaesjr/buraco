import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #000000;
    }
  
    html{
    scroll-behavior: smooth;
  
   
    
    
}
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        background-color: #f5edd0;
        color: #000000;
       

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    /* ol, ul {
        list-style: none;
    } */

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

h1{
    font-family: "Play", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: rgb(9, 46, 3)
}
h2{
    font-family: "Play", sans-serif;
}
h3{
    font-family: "Play", sans-serif;
}
p{
    font-family: "Play", sans-serif;
}
    
`

export default GlobalStyle