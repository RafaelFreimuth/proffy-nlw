import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
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
                    <Select 
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'Educação Física', label: 'Educação Física'},
                        ]}
                    />
                    <Input 
                        name="cost"
                        label="Custo da sua hora por aula"
                        required
                    />
                    <Textarea 
                        name="bio"
                        label="Biografia"
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