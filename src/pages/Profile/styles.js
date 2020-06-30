import styled from 'styled-components';

export const Container = styled.div`
    .background {
        margin: 0 20vw 0 20vw;
        height: 100vh;
        background-color: rgb(241, 240, 245);
        display: flex;
        flex-direction: column;
    }

    .headerBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: flex-start;
        height: 15vh;
        padding-top: 5vh;
    }

    .leftPart,
    .rightPart,
    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .content {
        justify-content: space-between;
    }

    .logo {
        width: 9rem;
        height: 4rem;
        margin-right: 20px;
    }

    p {
        font-weight: bold;
    }

    .regButton {
        padding: 0.8rem;
        width: 12vw;
        background-color: rgb(224, 33, 66);
        color: white;
        border: none;
        border-radius: 5px;
        font-weight: bold;
    }

    .imgButton {
        padding: 0.8rem;
        width: 2.7rem;
        height: 2.7rem;
        border: 1px solid gray;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
    }

    .off {
        width: 1rem;
        height: 1rem;
    }
`;
