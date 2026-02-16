import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';

export const PantallaRegistro = () => {
    const [nombre, setNombre] = React.useState('');
    const [cedula, setCedula] = React.useState('');
    const [celular, setCelular] = React.useState('');
    const [direccion, setDireccion] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={globalStyles.container}>
                <Text style={globalStyles.title}>Registro Arcadia</Text>

                <TextInput
                style={globalStyles.input}
                    placeholder="Ingrese su Nombre"
                    onChangeText={setNombre}
                    value={nombre}
                />
                <TextInput
                style={globalStyles.input}
                    placeholder="Ingrese su Numero de Cedula"
                    onChangeText={setCedula}
                    value={cedula}
                    keyboardType="numeric"

                />
                <TextInput
                style={globalStyles.input}
                    placeholder="Ingrese su Numero Celular"
                    onChangeText={setCelular}
                    value={celular}
                    keyboardType="numeric"

                />
                <TextInput
                style={globalStyles.input}
                    placeholder="Ingrese su direccion"
                    onChangeText={setDireccion}
                    value={direccion}
                />
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
                    secureTextEntry={true}
                />
                <TextInput
                style={globalStyles.input}
                    placeholder="Confirme su Contraseña"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                />
                <View style={{ marginTop: 20 }}>
                <Button  title='Enviar Registro'
        color={ colores.primary } // Usamos el verde de tu appTheme
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Bienvenidos' }))}/>
        </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};




