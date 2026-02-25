import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';

import Icon from '@expo/vector-icons/MaterialIcons';

import { ModalProductCommponets } from './ModalProductCommponets';
import { colores, globalStyles } from '../../../theme/appTheme';

interface Props {
    item: Product;
}

export const CardProductCommponents = ({ item }: Props) => {

    //hook useState para mostrar el modal del producto seleccionado
    const [showModal, setShowModal] = useState<boolean>(false);

    //funcion para mostrar el modal del producto seleccionado
    const hidenModal = (): void => {
        setShowModal(!showModal);
    }

    return (
        <>
            <View style={globalStyles.containerCard}>
                <Image style={globalStyles.imageCard} source={{
                    uri: item.pathImage
                }} />
                <View >
                    <Text style={globalStyles.titleCard}>{item.name}</Text>
                    <Text style={globalStyles.textPrice}>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={globalStyles.iconCard}>
                    <Icon name='add-shopping-cart' 
                    size={33} 
                    color={colores.primary} 
                    onPress={hidenModal}
                    />
                </View>
            </View>
            <ModalProductCommponets isVisible={showModal} item={item} hidenModal={hidenModal} />
        </>
    )
}
