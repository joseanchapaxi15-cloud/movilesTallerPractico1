import React from 'react';
import { Alert, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import { colores, globalStyles } from '../../../theme/appTheme';
import { Cart } from '../HomeScreen';

interface Props {
    isVisible: boolean;      // Controla si el modal es visible
    cart: Cart[];            // Lista de productos añadidos al carrito
    hiddenModal: () => void; // Función para cerrar el modal
    handleEmptyCart: () => void; // Función para limpiar el carrito después de la compra
}
export const ModalCartCommponets = ({ isVisible, cart, hiddenModal, handleEmptyCart }: Props) => {
    // Obtiene el ancho de la pantalla para ajustar el diseño del modal
    const { width } = useWindowDimensions();
    /**
     * Calcula la suma total de todos los productos en el carrito.
     * Recorre el arreglo 'cart' y acumula el valor de la propiedad 'total' de cada item.
     */
    const totalPay = (): number => {
        let total: number = 0;
        cart.forEach(item => {
            total += item.total;
        });
        return total;
    }
    // Procesa la acción de compra:
    const handleBuy = (): void => {
        handleEmptyCart(); // * 1. Vacía el carrito mediante handleEmptyCart.
        hiddenModal(); // * 2. Cierra el modal.
        Alert.alert('¡Compra Exitosa!', 'Tu pedido ha sido procesado.');//* 3. Muestra una alerta de confirmación al usuario.
    }
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={globalStyles.containerModal}>
                <View style={{
                    ...globalStyles.bodyModal,
                    width: width * 0.80 // El modal ocupa el 80% del ancho de la pantalla
                }}>
                    {/* Encabezado del Modal */}
                    <View style={globalStyles.headerModal}>
                        <Text style={globalStyles.titleModal}>Mis Productos</Text>
                        <View style={globalStyles.iconCard}>
                            <Icon name='cancel'
                                color={colores.secondary}
                                size={30}
                                onPress={hiddenModal} />
                        </View>
                    </View>
                    {/* Cabecera de la Tabla de productos */}
                    <View style={globalStyles.headerTable}>
                        <Text style={{ ...globalStyles.headerTextTable, marginHorizontal: 10 }}>Producto</Text>
                        <View style={globalStyles.headerDescripcion}>
                            <Text style={{ ...globalStyles.headerTextTable, marginHorizontal: 10 }}>Pre.</Text>
                            <Text style={{ ...globalStyles.headerTextTable, marginHorizontal: 10 }}>Cant.</Text>
                            <Text style={{ ...globalStyles.headerTextTable, marginHorizontal: 10 }}>Total</Text>
                        </View>
                    </View>
                    {/* Lista desplegable de los productos en el carrito */}
                    <FlatList
                        data={cart}
                        renderItem={({ item }) =>
                            <View style={globalStyles.headerTable}>
                                <Text style={globalStyles.headerTextTable}>{item.name}</Text>
                                <View style={globalStyles.headerDescripcion}>
                                    <Text style={{...globalStyles.headerTextTable, marginHorizontal: 5 }}>${item.price.toFixed(2)}</Text>
                                    <Text style={{ ...globalStyles.headerTextTable,marginHorizontal: 25 }}>{item.quantity}</Text>
                                    <Text style={{ ...globalStyles.headerTextTable, marginHorizontal: 2 }}>${item.total.toFixed(2)} </Text>
                                </View>
                            </View>
                        }
                        keyExtractor={(item) => item.id.toString()}
                    />
                    {/* Sección de Total y Botón de Acción */}
                    <View style={globalStyles.containerTotalPay}>
                        <Text style={globalStyles.textoTotalPay}>Total Pagar: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={globalStyles.button} onPress={handleBuy}>
                        <Text style={globalStyles.buttonTex}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}