import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../service/api';
import { Link } from 'react-router-dom'
import './styles.css'

function Landing() {

    const [connections, setConnections] = useState(0);
    
    useEffect(() => {
        async function loadConexao() {
            const response = await api.get('/connections');        
            setConnections(response.data.total);
        }
        loadConexao();
    }, []);
    
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    className="hero-image" 
                    alt="Plataforma de estudps"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {connections} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;