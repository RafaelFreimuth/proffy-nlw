import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    const [classes, setClasses] = useState([]);

    useEffect(() => {
       async function carregar() {
           const response = await api.get('/classes');

           setClasses(response.data);
       }

       carregar();
    }, []);

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis' 
                headerRight={(
                    <BorderlessButton>
                        <Feather 
                            name="filter" 
                            size={20} 
                            color="#FFF"
                            onPress={handleToggleFiltersVisible}
                        />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Qual a matéria"
                            placeholderTextColor="#c1bccc"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>
                        <RectButton 
                            style={styles.submitButton} 
                        >
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{   
                    paddingHorizontal: 16,
                    paddingBottom: 16
                 }}
            >  
                {
                    classes.map((classe, index) => {
                        return <TeacherItem key={index} data={classe}/>
                    }) 
                }
            
            </ScrollView>
        </View>
    )
}

export default TeacherList;
