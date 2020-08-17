import React from 'react';
import { View, Image, Text, Linking, Alert, ErrorUtils } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface DataProps {
    data: {
        avatar: string,
        bio: string,
        cost: number,
        id: number,
        name: string,
        subject: string,
        user_id: number,
        whatsapp: string
    }
}

const TeacherItem: React.FC<DataProps> = ({ data }) => {
    
    async function abrirWhatsERegistrarConexao() {

        try {
            await api.post('/connections', {user_id: data.user_id});
                
            return Linking.openURL(`whatsapp://send?phone=${data.whatsapp}`)

        } catch(error) {
            Alert.alert(error.message)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: data.avatar }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <Text style={styles.subject}>
                        {data.subject}
                    </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {data.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ {data.cost.toFixed(2)}
                    </Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon}/>
                    </RectButton>

                    <RectButton 
                        style={styles.contactButton} 
                        onPress={abrirWhatsERegistrarConexao}
                    >
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;