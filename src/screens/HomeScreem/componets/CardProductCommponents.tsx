import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ModalProductCommponets } from './ModalProductCommponets';
import { colores, globalStyles } from '../../../theme/appTheme';

interface Props {
    item: Product; // El objeto del producto individual a mostrar
    changeStockProduct: (id: number, quantity: number) => void; // Función que viene del padre para actualizar stock
}
export const CardProductCommponents = ({ item, changeStockProduct }: Props) => {
   // hook useState: controla si el modal de detalles del producto está abierto (true) o cerrado (false)
    const [showModal, setShowModal] = useState<boolean>(false);
    /**
     * Función para alternar la visibilidad del modal.
     * Cambia el estado 'showModal' a su valor opuesto.
     */
    const hidenModal = (): void => {
        setShowModal(!showModal);
    }
    return (
        <>
            {/* Contenedor principal de la tarjeta del producto */}
            <View style={globalStyles.containerCard}>
                {/* Imagen del producto cargada desde una URL */}
                <Image style={globalStyles.imageCard} source={{
                    uri: item.pathImage
                }} />
                {/* Información del producto: Nombre y Precio formateado a dos decimales */}
                <View >
                    <Text style={globalStyles.titleCard}>{item.name}</Text>
                    <Text style={globalStyles.textPrice}>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                {/* Botón de acción (Icono): Al presionarlo abre el modal de detalles */}
                <View style={globalStyles.iconCard}>
                    <Icon name='add-shopping-cart'
                        size={33}
                        color={colores.primary}
                        onPress={hidenModal}
                    />
                </View>
            </View>
            {/* Componente Modal: Se activa cuando showModal es true y permite elegir la cantidad */}
            <ModalProductCommponets
                isVisible={showModal}
                item={item}
                hidenModal={hidenModal}
                changeStockProduct={changeStockProduct}
            />
        </>
    )
}