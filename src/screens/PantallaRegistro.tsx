import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { forwardRef, useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';
import { ImputComponent } from '../Component/ImputComponent';
import { User } from '../navigator/StackNavigator';

interface From {

    nombre: string;
    cedula: string
    celular: string;
    direccion: string;
    email: string;
    password: string;
    confirmPassword: string
}

interface Props {
    listUsers: User[];
    handleAddUser: (user: User) => void;
}
export const PantallaRegistro = ({ handleAddUser, listUsers }: Props) => {
    const navigation = useNavigation();
    const [form, setForm] = useState<From>({
        nombre: '',
        cedula: '',
        celular: '',
        direccion: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    //funcion para capturar los valores de mi formulario 
    const handleChangeValue = (name: string, value: string): void => {
        setForm({ ...form, [name]: value });
    }
    //funsion para verificar si exixte el usuario
    const verifyUser = () => {
        const existUser = listUsers.filter(user => user.email == form.email)[0];
        return existUser;
    }
    //funsion para registrarse
    const handleRegister = (): void => {
        //validad que los cmapos esten llenos 
        if (form.nombre == '' || form.email == '' || form.password == '') {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }
        //valiadra cmapo de iniioc de sesion 
        if (verifyUser()) {
            Alert.alert('Error', 'El usuario ya se encuentra registrado');
            return;
        }
        //funsion para generar los id de los nuevos usuarios 
        const getIdUser = () => {
            const getId = listUsers.length + 1;
            return getId;
        }
        //registrar usuarios 
        //crear objeto User
        const newUser: User = {
            id: getIdUser(),
            name: form.nombre,
            cedula: form.cedula,
            celular: form.celular,
            direccion: form.direccion,
            email: form.email,
            password: form.password
        }

        // agregar objeto al arreglo 
        handleAddUser(newUser);
        Alert.alert('Registro', 'Usuario registrado correctamente');
        //redireccionar al login
        navigation.goBack();
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
                        handleChangeValue={handleChangeValue}
                        keyboardType="default"
                    />
                    <ImputComponent
                        placeholder="Cedula"
                        name="cedula"
                        handleChangeValue={handleChangeValue}
                        keyboardType="numeric"
                    />
                    <ImputComponent
                        placeholder="Celular"
                        name="celular"
                        handleChangeValue={handleChangeValue}
                        keyboardType="numeric"
                    />
                    <ImputComponent
                        placeholder="Direccion"
                        name="direccion"
                        handleChangeValue={handleChangeValue}
                        keyboardType="default"
                    />
                    <ImputComponent
                        placeholder="Email"
                        name="email"
                        handleChangeValue={handleChangeValue}
                        keyboardType="email-address"
                    />
                    <ImputComponent
                        placeholder="Contraseña"
                        name="password"
                        handleChangeValue={handleChangeValue}
                        keyboardType="default"
                    />
                    <ImputComponent
                        placeholder="Confirme su contraseña"
                        name="confirmPassword"
                        handleChangeValue={handleChangeValue}
                        keyboardType="default"
                    />
                    <View style={{ marginTop: 20, marginBottom: 50 }}>
                        <Button title='Enviar Registro'
                            color={colores.primary}
                            onPress={handleRegister}
                        />
                        <TouchableOpacity style={{ marginTop: 10 }}
                            onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio sesion' }))}>
                            <Text style={globalStyles.textRedirect}>
                                Ya tienes cuenta? Inicia sesión ahora
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaProvider>
    )
}




