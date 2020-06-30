import React, { useState } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import heroes from '../../assets/heroes.png';
import icon from '../../assets/icon.svg';

function Signin() {
    const [id, setId] = useState('');

    async function handleCreate() {
        const data = {
            id,
        };

        const response = await api.post('/sessions', data);
        console.log(data);
        console.log(response);
    }
    return (
        <Container>
            <div className="login">
                <img src={logo} alt="logo" />
                <label htmlFor="user">Faça seu logon</label>
                <input
                    type="text"
                    id="user"
                    placeholder="Sua ID"
                    value={id}
                    onChange={(v) => setId(v.target.value)}
                />
                <a className="link1" href="# " onClick={handleCreate}>
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
