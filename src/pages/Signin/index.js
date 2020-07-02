import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import heroes from '../../assets/heroes.png';
import icon from '../../assets/icon.svg';

function Signin() {
    const history = useHistory();

    const [id, setId] = useState('');

    async function handleLogin() {
        const data = {
            id,
        };

        await api.post('/sessions', data);

        setId('');
        history.push('/profile');
        localStorage.setItem('UserId', id);
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
                <a className="link1" href="# " onClick={handleLogin}>
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
