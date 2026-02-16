import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';

export const PantallaInicioSeSion = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.container}>
                <Text style={globalStyles.title}>Iniciar Sesion</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder="Ingrese su Email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder="Ingrese su Contraseña"
                    onChangeText={setPassword}
                    value={password}
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 10 }}>
                    <Button
                        title='Iniciar Sesión'
                        color={colores.primary} // Verde Arcadia
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Bienvenidos' }))}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Button
                        title='Crear Cuenta'
                        color={colores.secondary} // Dorado para diferenciar
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro cliente' }))}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};