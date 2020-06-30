import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';

function Register() {
    return (
        <Container>
            <div className="background">
                <div className="centerForm">
                    <div className="leftDiv">
                        <img src={logo} alt="logo" className="logo" />
                        <h2>Cadastro</h2>
                        <p>
                            Faça seu cadastro, entre na plataforma e ajude
                            pessoas a encontrar os casos da sua ONG.
                        </p>
                        <div className="noSignin">
                            <div className="arrow">
                                <div className="firstLine" />
                                <div className="secondLine" />
                                <div className="thirdLine" />
                            </div>
                            <p>Não tenho cadastro</p>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <input type="text" placeholder="Nome da ONG" />
                        <input type="email" placeholder="E-mail" />
                        <input type="tel" placeholder="Whatsapp" />
                        <div className="lastInputs">
                            <input
                                type="text"
                                placeholder="Cidade"
                                className="firstInput"
                            />
                            <input
                                type="text"
                                placeholder="UF"
                                className="secondInput"
                            />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Register;
