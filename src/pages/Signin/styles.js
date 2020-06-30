import styled from 'styled-components';

export const Container = styled.div`
    background: rgb(241 240 245);
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: center;
    padding-top: 5rem;

    .login {
        display: flex;
        flex-direction: column;
        width: 25%;
        padding: 0 6rem;
    }

    .login label,
    input,
    button {
        width: 190px;
        margin-top: 10px;
    }

    .login img {
        width: 50%;
        height: 65px;
    }

    .login label {
        font-weight: bold;
        font-family: sans-serif;
        font-size: 18px;
        margin-top: 4rem;
    }

    .login input {
        padding: 0.5rem;
        border: 1px solid #ffffff;
        border-radius: 5px;
        margin-top: 2rem;
    }

    .login a {
        text-decoration: none;
    }

    #img2 {
        width: 35px;
        height: 15px;
        color: rgb(224 33 66);
    }

    .link1 {
        background: rgb(224 33 66);
        font-size: 12px;
        font-family: sans-serif;
        color: #ffffff;
        text-align: center;
        padding: 10px 0;
        border-radius: 5px;
        width: 208px;
        margin-bottom: 2rem;
        margin-top: 0.8rem;
    }

    .iconBtn {
        display: flex;
        align-items: center;
    }

    .link2 {
        color: #000000;
        font-family: sans-serif;
        font-size: 12px;
    }

    .image img {
        width: 500px;
        height: 420px;
    }
`;
