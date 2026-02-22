import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';
import { ImputComponent } from '../Component/ImputComponent';

export const PantallaInicioSeSion = () => {

    const [form, setForm] = React.useState({

        email: '',
        password: '',


    });
    const handleChange = (name: string, value: string): void => {
        console.log(name, " ", value, "  ");
        setForm({
            ...form,
            [name]: value
        });
    }

    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.logoContainer}>
                    <Image source={require('../image/logo_sintetica.jpg')}
                        style={globalStyles.logo}
                        resizeMode="contain" />
                </View>
                <Text style={globalStyles.title}>Iniciar Sesion</Text>
                <ImputComponent
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    handleChangeValue={handleChange}
                    keyboardType="email-address"
                />
                <ImputComponent
                    placeholder="Contraseña"
                    name="password"
                    value={form.password}
                    handleChangeValue={handleChange}
                    keyboardType="default"
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 10 }}>
                    <Button
                        title='Iniciar Sesión'
                        color={colores.primary}
                        onPress={() => { console.log(form); navigation.dispatch(CommonActions.navigate({ name: 'Bienvenidos' })) }}
                    />
                </View>

                <View style={{ marginTop: 10 }}>
                    <Button
                        title='Crear Cuenta'
                        color={colores.secondary}
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro cliente' }))}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};