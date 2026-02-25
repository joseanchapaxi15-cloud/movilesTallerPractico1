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
    },
    containerCard: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: colores.secondary,
        borderRadius: 3,
        borderStyle: 'solid',
        margin: 7,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16
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
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    bodyModal: {

        backgroundColor: colores.cardBackground,
        borderRadius: 10,
        padding: 20
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        padding: 10,

    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 18
    },
    imageModal: {
        width: '60%',
        height: 200,
        borderRadius: 10,
        marginTop: 10
    },
    containerQuantity:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonQuantity:{
        backgroundColor: colores.accent,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin:15
    },
    textQuantity:{
        color: colores.background,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    textTotalPrice:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textStock:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginTop: 10
    }

});