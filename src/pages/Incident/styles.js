import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
    .background {
        width: 100vw;
        height: 100vh;
        background-color: rgb(241, 240, 245);
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .centerForm {
        width: 60vw;
        height: 50vh;
        box-shadow: 0 0 40px 10px lightgray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .leftDiv,
    .rightDiv {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        width: 50%;
        height: 100%;
    }

    .leftDiv {
        margin: 0 5% 0 10%;
    }

    .rightDiv {
        margin: 0 10% 0 5%;
    }

    img {
        width: 10rem;
        height: 5rem;
    }

    p {
        font-size: 12px;
        font-weight: 300;
    }

    input {
        padding: 0.8rem;
        margin-bottom: 0.4rem;
        width: 20vw;
        border: none;
        border-radius: 5px;
    }

    button {
        padding: 0.8rem;
        width: 21.72vw;
        border: none;
        border-radius: 5px;
        background-color: rgb(224, 33, 66);
        color: white;
    }

    textarea {
        border: none;
        border-radius: 5px;
        padding: 0.8rem;
        width: 20vw;
        margin-bottom: 0.4rem;
        font-family: 'Roboto', sans-serif;
        resize: none;
    }
`;
