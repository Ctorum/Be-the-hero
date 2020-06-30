import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import off from '../../assets/off.svg';

function Profile() {
    return (
        <Container>
            <div className="background">
                <div className="headerBar">
                    <div className="leftPart">
                        <img src={logo} alt="logo" className="logo" />
                        <p>Bem vinda,</p>
                    </div>
                    <div className="rightPart">
                        <button type="button" className="regButton">
                            Cadastrar novo caso
                        </button>
                        <button type="button" className="imgButton">
                            <img src={off} alt="off" className="off" />
                        </button>
                    </div>
                </div>
                <div className="content">
                    <div className="leftDiv">
                        <h2>Casos cadastrados</h2>
                    </div>
                    <div className="rightDiv" />
                </div>
            </div>
        </Container>
    );
}

export default Profile;
