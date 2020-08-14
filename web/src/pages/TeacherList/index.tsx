import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input';
import './styles.css'
import api from '../../service/api';

function TeacherList() {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
       async function carregar() {
           const classes = await api.get('/classes');

           setClasses(classes.data);
       }

       carregar();
    }, []);

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Input 
                        name="subject"
                        label="Matéria"
                    />
                    <Input 
                        name="week_day"
                        label="Dia da Semana"
                        type="month"
                    />
                    <Input 
                        name="time"
                        label="Hora"
                        type="time"
                    />
                </form>
            </PageHeader>

            <main>
                {
                    classes.map((classe, index) => {

                        return <TeacherItem key={index} data={classe}/>
                    })
                }
            </main>
        </div>
    )
}

export default TeacherList;