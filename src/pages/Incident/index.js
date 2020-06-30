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
                            Descreva o caso detalhadamente para encontrar um
                            herói para resolver isso
                        </p>
                        <div className="noSignin">
                            <div className="arrow">
                                <div className="firstLine" />
                                <div className="secondLine" />
                                <div className="thirdLine" />
                            </div>
                            <p>Voltar para home</p>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <input type="text" placeholder="Título do caso" />
                        <textarea placeholder="Descrição" rows="7" cols="33" />
                        <input type="tel" placeholder="Valor em reais" />
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Register;
