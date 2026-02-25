import { StyleSheet } from "react-native";

// appTheme.ts revisado
export const colores = {
    primary: '#2d5a27',      // Verde césped oscuro (Base)
    accent: '#4ade80',       // Verde neón (Para resaltar, como en la web)
    secondary: '#FFD700',    // Dorado (Trofeos y promociones)
    background: '#0f172a',   // Azul muy oscuro/Negro (Efecto nocturno de la web)
    cardBackground: '#1e293b', // Fondo para inputs y tarjetas
    white: '#ffffff',
    textSecondary: '#94a3b8', // Gris para textos menos importantes
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colores.background, 
        padding: 20,

        justifyContent: 'flex-start', 
        paddingTop: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colores.accent, 
        textAlign: 'center',
        marginBottom: 30,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
    },
    input: {
        backgroundColor: 'white' ,
        height: 60,
        borderColor: colores.primary,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color:  '#000000'
    },
    btnPrincipal: {
        backgroundColor: colores.accent,
        height: 55,
        borderRadius: 30, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colores.accent,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 180, 
        height: 180,
        borderRadius: 90, 
        borderWidth: 3,
        borderColor: colores.accent,
    },

    btnTexto: {
        color: colores.background, 
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconPassword:{
        position:'absolute',
        bottom:35,
        right:10
    },
    textRedirect:{
        marginTop:20,
        fontSize:16,
        color:colores.primary,
        fontWeight:'bold',
        textAlign:'center'
    }
});