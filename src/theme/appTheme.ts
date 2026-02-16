import { StyleSheet } from 'react-native';

// Definimos los colores de la temática "Sintética La Arcadia"
export const colores = {
    primary: '#2d5a27', // Verde de la cancha
    secondary: '#FFD700', // Dorado de los trofeos
    background: '#f0f2f0', // Gris claro de fondo
    white: '#ffffff',
    black: '#1a1a1a',
    error: '#FF0000',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.background,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colores.primary,
        textAlign: 'center',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    input: {
        backgroundColor: colores.white,
        height: 55,
        borderColor: colores.primary,
        borderWidth: 1.5,
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: colores.black,
    },
    btnPrincipal: {
        backgroundColor: colores.primary,
        height: 55,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 5,
    },
    btnTexto: {
        color: colores.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
});