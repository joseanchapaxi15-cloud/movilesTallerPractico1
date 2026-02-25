import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicioSeSion } from '../screens/PatallaInicioSesion';
import { PantallaRegistro } from '../screens/PantallaRegistro';
import { PantallaBienvenidos } from '../screens/PantallaBienvenidos';
import { useState } from 'react';
import { HomeScreen } from '../screens/HomeScreem/HomeScreen';

const Stack = createStackNavigator();
export interface User {
    id: number;
    name: string;
    cedula: string
    celular: string;
    direccion: string;
    email: string;
    password: string;

}
export const StackNavigator = () => {
    //datos de prueba
    const users: User[] = [
        {
            id: 1,
            name: "Juan Perez",
            cedula: "123456789",
            celular: "3001234567",
            direccion: "Calle 123 #45-67",
            email: "juanperez@gmail.com",
            password: "123456"
        },
        {
            id: 2,
            name: "Maria Lopez",
            cedula: "987654321",
            celular: "3007654321",
            direccion: "Carrera 45 #67-89",
            email: "marialopez@gmail.com",
            password: "abcdef"
        }
    ]
    //hook useState: permite getsionar la lista de usuarios 
    const [listUsers, setListUsers] = useState<User[]>(users);

    //funcion para agregar eñ usurioa al arreglo listUser
    const handleAddUser = (user: User): void => {
        //mpodificr el estado del arreglo 
        setListUsers([...listUsers, user]);

    }




    return (
        <Stack.Navigator>
            <Stack.Screen name="Bienvenidos" component={PantallaBienvenidos} />
            <Stack.Screen name="Registro cliente" 
                options={{ headerShown: false }}
                children={() => <PantallaRegistro listUsers={listUsers} handleAddUser={handleAddUser}/> } />
            <Stack.Screen name="Inicio sesion" 
                options={{ headerShown: false }}
                children={() => <PantallaInicioSeSion users={listUsers} /> } />
                <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen} />
        </Stack.Navigator>
    );
}   