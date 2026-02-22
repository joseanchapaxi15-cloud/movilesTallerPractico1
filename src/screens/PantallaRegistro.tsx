import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import { Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';
import { ImputComponent } from '../Component/ImputComponent';


export const PantallaRegistro = () => {


    const navigation = useNavigation();

    const [form, setForm] = React.useState({
        nombre: '',
        cedula: '',
        celular: '',
        direccion: '',
        email: '',
        password: '',
        confirmPassword: ''

    });
    const handleChange = (name: string, value: string): void => {
        console.log(name, " ", value, "  ");
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <SafeAreaProvider>
            <ScrollView
                style={{ backgroundColor: colores.background }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            ><SafeAreaView style={globalStyles.container}>
                    <View style={globalStyles.logoContainer}>
                        <Image source={require('../image/logo_sintetica.jpg')}
                            style={globalStyles.logo}
                            resizeMode="contain" />
                    </View>
                    <Text style={globalStyles.title}>Registro Arcadia</Text>

                    <ImputComponent
                        placeholder="Nombre Completo"
                        name="nombre"
                        value={form.nombre}
                        handleChangeValue={handleChange}
                        keyboardType="default"
                    />
                    <ImputComponent
                        placeholder="Cedula"
                        name="cedula"
                        value={form.cedula}
                        handleChangeValue={handleChange}
                        keyboardType="numeric"

                    />
                    <ImputComponent
                        placeholder="Celular"
                        name="celular"
                        value={form.celular}
                        handleChangeValue={handleChange}
                        keyboardType="numeric"

                    />
                    <ImputComponent
                        placeholder="Direccion"
                        name="direccion"
                        value={form.direccion}
                        handleChangeValue={handleChange}
                        keyboardType="default"
                    />
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
                        
                    />
                    <ImputComponent
                        placeholder="Confirme su contraseña"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        handleChangeValue={handleChange}
                        keyboardType="default"
                    />
                    <View style={{ marginTop: 20, marginBottom: 50 }}>
                        <Button title='Enviar Registro'
                            color={colores.primary}
                            onPress={() => {
                                console.log(form);
                                navigation.dispatch(CommonActions.navigate({ name: 'Bienvenidos' }))
                            }} />
                    </View>
                </SafeAreaView>


            </ScrollView>

        </SafeAreaProvider>
    );
};




