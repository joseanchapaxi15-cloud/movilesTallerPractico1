import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicioSeSion } from '../screens/PatallaInicioSesion';
import { PantallaRegistro } from '../screens/PantallaRegistro';
import { PantallaBienvenidos } from '../screens/PantallaBienvenidos';

const Stack = createStackNavigator();

export const StackNavigator=() => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Bienvenidos" component={PantallaBienvenidos} />
            <Stack.Screen name="Inicio sesion" component={PantallaInicioSeSion} />
            <Stack.Screen name="Registro cliente" component={PantallaRegistro} />
            
        </Stack.Navigator>
    );
}   