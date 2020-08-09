import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favoritos() {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <PageHeader title='Meus proffys favoritos'/>
            </View>
        </View>
    )
}

export default Favoritos;
