import { CommonActions, useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { colores, globalStyles } from "../theme/appTheme";

// PantallaBienvenidos.tsx mejorada
export const PantallaBienvenidos = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.logoContainer}>
                <Image source={require('../image/logo_sintetica.jpg')}
                style={globalStyles.logo}
                resizeMode="contain"/>
            </View>
            <Text style={globalStyles.title}>DOMINA LA CANCHA{"\n"}LA ARCADIA</Text>
            
            <View style={{ gap: 15 }}>
                <TouchableOpacity 
                    style={globalStyles.btnPrincipal}
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio sesion' }))}
                >
                    <Text style={globalStyles.btnTexto}>INICIAR SESIÓN</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ ...globalStyles.btnPrincipal, backgroundColor: 'transparent', borderWidth: 2, borderColor: colores.white }}
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Registro cliente' }))}
                >
                    <Text style={{ ...globalStyles.btnTexto, color: colores.white }}>CREAR CUENTA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}