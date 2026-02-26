import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, Image, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colores, globalStyles } from '../theme/appTheme';
import { ImputComponent } from '../Component/ImputComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { User } from '../navigator/StackNavigator';

interface Form {
    email: string;
    password: string;
}
interface Props {
    users: User[]; //arreglo de usuarios desde stack navigator
}
export const PantallaInicioSeSion = ({ users }: Props) => {
    const [form, setForm] = useState<Form>({
        email: '',
        password: ''
    });
    //hook useState: permite getsionar el estado de la contraseña 
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
    const handleChangeValue = (name: string, value: string): void => {
        setForm({ ...form, [name]: value });
    }
    //funcion para verificar si exixte el usuario 
    const verifyUser = (): User => {
        const existUser = users.filter(user => user.email == form.email && user.password == form.password)[0];
        return existUser;
    }
    // funcion pata iniciar sesion
    const handleSingIn = (): void => {
        if (form.email == '' || form.password == '') {
            //mesaje de alerta 
            Alert.alert('Error', 'Porfavor complete todos los campos');
            return;
        }
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incporrectos');
            return;
        }
         //si todo sale bien se craga la lista de productos 
        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
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
                    handleChangeValue={handleChangeValue}
                    keyboardType="email-address"
                />
                <View style={{ position: 'relative', width: '100%' }}>
                    <ImputComponent
                        placeholder="Contraseña"
                        name="password"
                        handleChangeValue={handleChangeValue}
                        keyboardType="default"
                        isPassword={hiddenPassword}
                    />
                    <Icon name={hiddenPassword == true ? 'visibility' : 'visibility-off'} color={colores.textSecondary}
                        size={20}
                        style={globalStyles.iconPassword}
                        onPress={() => setHiddenPassword(!hiddenPassword)}
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title='Iniciar Sesión'
                        color={colores.primary}
                        onPress={() => { handleSingIn(); console.log(form); }}
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