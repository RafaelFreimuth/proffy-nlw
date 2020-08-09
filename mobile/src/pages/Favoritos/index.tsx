import React from 'react';
import { View, ScrollView } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import styles from './styles';

function Favoritos() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <PageHeader title='Meus proffys favoritos'/>
                <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{   
                    paddingHorizontal: 16,
                    paddingBottom: 16
                 }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
            </View>
        </View>
    )
}

export default Favoritos;
