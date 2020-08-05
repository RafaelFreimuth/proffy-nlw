import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O Primeiro passo é preeencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                        name="name"
                        label="Nome completo"
                        required
                    />
                    <Input 
                        name="avatar"
                        label="Avatar"
                        required
                    />
                    <Input 
                        name="whatsapp"
                        label="WhatsApp"
                        required
                    />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Input 
                        name="subject"
                        label="Matéria"
                        required
                    />
                    <Input 
                        name="cost"
                        label="Custo da sua hora por aula"
                        required
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;