import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import styles from './styles';

function Landing() {

    const navigation = useNavigation();

    const [connections, setConnections] = useState(0);
        
    useEffect(() => {
        async function loadConexao() {
            const response = await api.get('/connections');        
            setConnections(response.data.total);
        }
        loadConexao();
    }, []);
    
    function handleNavigateToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image 
                source={landingImg} 
                style={styles.banner}
            />

            <Text style={styles.title}>Seja bem-vindo. {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer</Text>
            </Text>

            <View style={styles.buttonContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]} 
                    onPress={handleNavigateToGiveClassesPage}>
                    
                    <Image source={giveClassesIcon} />
                    
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text 
                style={styles.totalConnections}>
                Total de {connections} conexões já realizadas
                {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}

export default Landing;