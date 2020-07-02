import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';

function Register() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleCreate() {
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        const response = await api.post('/ongs', data);
        alert(`Seu ID de acesso é: ${response.data.id}`);

        setName('');
        setEmail('');
        setWhatsapp('');
        setCity('');
        setUf('');

        history.push('/');
    }

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
                        <input
                            type="text"
                            placeholder="Nome da ONG"
                            className="name"
                            value={name}
                            onChange={(v) => setName(v.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="email"
                            value={email}
                            onChange={(v) => setEmail(v.target.value)}
                        />
                        <input
                            type="tel"
                            placeholder="Whatsapp"
                            className="whatsapp"
                            value={whatsapp}
                            onChange={(v) => setWhatsapp(v.target.value)}
                        />
                        <div className="lastInputs">
                            <input
                                type="text"
                                placeholder="Cidade"
                                className="firstInput city"
                                value={city}
                                onChange={(v) => setCity(v.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="UF"
                                className="secondInput uf"
                                value={uf}
                                onChange={(v) => setUf(v.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="button"
                            onClick={handleCreate}
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Register;
