import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1700px){
            font-size:75%;
        }
        
    }
    body{
        color: white;
        background-color: #1b1b1b;
        font-family: 'Andada Pro', serif;
        overflow-x: hidden;
    }

    button{
        cursor: pointer;
        font-weight: 700;
        font-size: 1.1rem;
        font-family: 'Andada Pro', serif;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        border-radius: 10px;
        color: white;
        background-color: transparent;
        transition: all linear .5s;

        &:hover{
            color: #1b1b1b;
            background-color: #23d997;
        }
    }

    h2{
        font-size: 4rem;
        font-weight: lighter;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

    p{
        padding: 2rem 0;
        font-size: 1.4rem;
        color: #ccc;
    }
`;

export default GlobalStyle;
