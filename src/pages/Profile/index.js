import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import off from '../../assets/off.svg';

function Profile() {
    const [list, setList] = useState([]);
    const history = useHistory();
    const UserId = localStorage.getItem('UserId');

    async function handleList() {
        const response = await api.get('/profile', {
            headers: { Authorization: UserId },
        });
        setList(response.data);
    }

    useEffect(() => {
        handleList();
    }, []);

    const listElements = list.map(function (item, index) {
        return `${index}:${item.title}`;
    });
    console.log(listElements);
    console.log(list);

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
                        <div className="elementsList">
                            {list.map((item) => (
                                <>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>Valor: R${item.value}</p>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="rightDiv" />
                </div>
            </div>
        </Container>
    );
}

export default Profile;
