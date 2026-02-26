import { StyleSheet } from "react-native";

// appTheme.ts - Colores y Estilos unificados
export const colores = {
    primary: '#2d5a27',       // Verde césped oscuro
    accent: '#4ade80',        // Verde neón (Para botones y resaltados)
    secondary: '#FFD700',     // Dorado (Bordes de tarjetas)
    background: '#0f172a',    // Azul muy oscuro (Fondo principal)
    cardBackground: '#1e293b', // Fondo para tarjetas y modales
    white: '#ffffff',
    textSecondary: '#94a3b8', // Gris para textos de apoyo
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
        backgroundColor: 'white',
        height: 60,
        borderColor: colores.primary,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#000000'
    },
    btnPrincipal: {
        backgroundColor: colores.accent,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
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
    iconPassword: {
        position: 'absolute',
        bottom: 35,
        right: 10
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 16,
        color: colores.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerImput: {
        marginVertical: 15
    },
    button: {
        backgroundColor: colores.accent,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonTex: {
        textAlign: 'center',
        color: colores.background,
        fontSize: 15,
        fontWeight: 'bold'
    },
    textPrice: {
        textAlign: 'center',
        color: colores.white // Asegura visibilidad en la tarjeta
    },
    containerCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: colores.secondary,
        borderRadius: 10,
        backgroundColor: colores.cardBackground,
        margin: 7,
        elevation: 3
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colores.white // Texto blanco para fondo oscuro
    },
    imageCard: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 2
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)' // Oscurece el fondo al abrir modal
    },
    bodyModal: {
        backgroundColor: colores.cardBackground,
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#334155',
        borderBottomWidth: 1,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colores.white // Título visible en modal
    },
    imageModal: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
        resizeMode: 'contain'
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonQuantity: {
        backgroundColor: colores.accent,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginHorizontal: 15
    },
    textQuantity: {
        color: colores.white, // CORRECCIÓN: Ahora es blanco para ser visible
        fontSize: 20,
        fontWeight: 'bold',
    },
    textTotalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colores.white, // CORRECCIÓN: Ahora es blanco para ser visible
        marginVertical: 15,
        textAlign: 'center'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff4444',
        textAlign: 'center',
        marginTop: 10
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    icomHome: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textIconCart: {
        backgroundColor: colores.accent,
        position: 'absolute',
        top: 0,
        right: 0,
        fontWeight: 'bold',
        color: colores.background,
        width: 22,
        height: 22,
        borderRadius: 11,
        textAlign: 'center',
        textAlignVertical: 'center',
        zIndex: 1,
        fontSize: 12,
        elevation: 3
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: colores.textSecondary
    },
    headerDescripcion: {
        flexDirection: 'row',
    },
    headerTextTable: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colores.white
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginTop: 15,
    },
    textoTotalPay: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colores.accent
    }
});