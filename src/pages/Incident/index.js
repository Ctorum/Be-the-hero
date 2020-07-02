import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

function Register() {
    const history = useHistory();
    const UserId = localStorage.getItem('UserId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleCreate() {
        const data = {
            title,
            description,
            value,
        };

        await api.post('/incidents', data, {
            headers: { Authorization: UserId },
        });
        alert('Caso cadastrado com sucesso');

        history.push('/profile');
    }

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
                        <input
                            type="text"
                            placeholder="Título do caso"
                            onChange={(v) => setTitle(v.target.value)}
                        />
                        <textarea
                            placeholder="Descrição"
                            rows="7"
                            cols="33"
                            onChange={(v) => setDescription(v.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Valor em reais"
                            onChange={(v) => setValue(v.target.value)}
                        />
                        <button type="submit" onClick={handleCreate}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Register;
