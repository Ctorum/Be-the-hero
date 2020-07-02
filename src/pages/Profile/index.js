import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import off from '../../assets/off.svg';

function Profile() {
    const history = useHistory();

    return (
        <Container>
            <div className="background">
                <div className="headerBar">
                    <div className="leftPart">
                        <img src={logo} alt="logo" className="logo" />
                        <p>Bem vinda,</p>
                    </div>
                    <div className="rightPart">
                        <button
                            type="button"
                            className="regButton"
                            onClick={() => history.push('/incident')}
                        >
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
                        <div className="elementsList" />
                    </div>
                    <div className="rightDiv" />
                </div>
            </div>
        </Container>
    );
}

export default Profile;
