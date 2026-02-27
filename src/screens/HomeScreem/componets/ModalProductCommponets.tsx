import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from '@expo/vector-icons/MaterialIcons';
import { colores, globalStyles } from '../../../theme/appTheme';

interface Props {
    isVisible: boolean;
    item: Product;
    hidenModal: () => void;
    changeStockProduct: (id: number, quantity: number) => void;
}

export const ModalProductCommponets = ({ isVisible, item, hidenModal, changeStockProduct }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { width } = useWindowDimensions();

    const handleAddProduct = () => {
        changeStockProduct(item.id, quantity);
        hidenModal();
        setQuantity(1);
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={globalStyles.containerModal}>
                <View style={{
                    ...globalStyles.bodyModal,
                    width: width * 0.80
                }}>

                    <View style={globalStyles.headerModal}>
                        <Text style={globalStyles.titleModal}>
                            {item.name} - ${item.price.toFixed(2)}
                        </Text>
                        <View style={globalStyles.iconCard}>
                            <Icon name='cancel'
                                color={colores.primary}
                                size={30}
                                onPress={hidenModal} />
                        </View>
                    </View>

                    {/* Imagen */}
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: item.pathImage
                        }} style={globalStyles.imageModal} />
                    </View>


                    {(item.stock === 0)
                        ? <Text style={globalStyles.textStock}>Producto agotado</Text>
                        : (
                            <>
                                <View style={globalStyles.containerQuantity}>
                                    <TouchableOpacity
                                        style={globalStyles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}>
                                        <Text style={globalStyles.textQuantity}>-</Text>
                                    </TouchableOpacity>


                                    <View>
                                        <Text style={globalStyles.textQuantity}>{quantity}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={globalStyles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity >= item.stock}>
                                        <Text style={globalStyles.textQuantity}>+</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ alignItems: 'center' }}>

                                    <Text style={globalStyles.textTotalPrice}>Total: ${(item.price * quantity).toFixed(2)}</Text>
                                </View>

                                <TouchableOpacity
                                    style={globalStyles.button}
                                    onPress={handleAddProduct}>
                                    <Text style={globalStyles.buttonTex}>Agregar Carrito</Text>
                                </TouchableOpacity>
                            </>
                        )
                    }
                </View>
            </View>
        </Modal>
    )
}