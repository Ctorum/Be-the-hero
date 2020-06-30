import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import heroes from '../../assets/heroes.png';
import icon from '../../assets/icon.svg';

function Signin() {
    return (
        <Container>
            <div className="login">
                <img src={logo} alt="logo" />
                <label htmlFor="user">Faça seu logon</label>
                <input type="text" id="user" placeholder="Sua ID" />
                <a className="link1" href="# ">
                    Entrar
                </a>
                <div className="iconBtn">
                    <img id="img2" src={icon} alt="icon" />
                    <a className="link2" href="/register">
                        Não tenho cadastro
                    </a>
                </div>
            </div>

            <div className="image">
                <img src={heroes} alt="logoH" />
            </div>
        </Container>
    );
}

export default Signin;
