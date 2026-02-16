import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { colores, globalStyles } from '../theme/appTheme';

export const PantallaBienvenidos = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Bienvenidos a la Cancha Sintetica La Arcadia</Text>
            <View>
                <Button
                    title='Ir a Registro'
                    color={colores.primary} // Verde césped
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro cliente' }))}
                />
            </View>

            <View>
                <Button
                    title='Ir a Inicio Sesion'
                    color={colores.secondary} // Dorado/Amarillo para variar
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio sesion' }))}
                />
            </View>
        </View>
    )
}
