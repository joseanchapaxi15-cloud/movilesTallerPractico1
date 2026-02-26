import React, { useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { colores, globalStyles } from '../../theme/appTheme';
import { CardProductCommponents } from './componets/CardProductCommponents';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ModalCartCommponets } from './componets/ModalCartCommponets';

// Interface para definir la estructura de los productos del inventario
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

// Interface para definir la estructura de los elementos dentro del carrito
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {

    const products: Product[] = [
        { id: 1, name: "Gatorade", price: 1.25, stock: 10, pathImage: "data:image/jpeg;base64,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" },
        { id: 2, name: "Powerade", price: 1.50, stock: 5, pathImage: "https://farmaenlace.vtexassets.com/arquivos/ids/175994-800-auto?v=638593395803000000&width=800&height=auto&aspect=true" },
        { id: 3, name: "Agua Tesalia", price: 1.50, stock: 0, pathImage: "data:image/jpeg;base64,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" },
        { id: 4, name: "Sporade", price: 1.25, stock: 6, pathImage: "data:image/jpeg;base64,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" },
        { id: 5, name: "V220", price: 1.25, stock: 4, pathImage: "data:image/jpeg;base64,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" },
        { id: 6, name: "Papas", price: 0.35, stock: 8, pathImage: "https://mercadomi.com.ec/wp-content/uploads/2025/07/50-ML-X2-2025-07-10T195508.369.png" },
        { id: 7, name: "Panchitos", price: 0.50, stock: 6, pathImage: "https://143367421.cdn6.editmysite.com/uploads/1/4/3/3/143367421/KCQGNLUSSEGQ4YUIEFJWKIRJ.jpeg?width=2400&optimize=medium" },
        { id: 8, name: "Coca-cola", price: 0.60, stock: 4, pathImage: "https://www.supermercadosantamaria.com/documents/10180/10504/108300363_G.jpg" },
    ];



    // Gestiona la lista de productos y permite que la interfaz se refresque cuando el stock cambia
    const [productsState, setProductsState] = useState<Product[]>(products);

    // Almacena la lista de productos seleccionados por el usuario para la compra
    const [cart, setCart] = useState<Cart[]>([]);

    // Controla la visibilidad del Modal del carrito (true: se ve, false: se oculta)
    const [showModal, setShowModal] = useState<boolean>(false);
    /**
     * handleEmptyCart: Limpia por completo el carrito de compras.
     * Se usa normalmente después de que el usuario finaliza una compra exitosa.
     */
    const handleEmptyCart = (): void => {
        setCart([]);
    }
    /**
     * handleOpenCartModal: Función de seguridad para abrir el carrito. */
    const handleOpenCartModal = (): void => {
        if (cart.length == 0) { //Valida que el carrito no esté vacío antes de mostrar el modal;
            Alert.alert('Carrito Vacío', 'No hay productos seleccionados.')// si está vacío, lanza una alerta informativa.
            return;
        }
        hidenModal();
    };

    /**
     * hidenModal: Alterna el estado del modal*/
    const hidenModal = (): void => {
        setShowModal(!showModal); // * Si está abierto lo cierra, y si está cerrado lo abre.
    }

    /**
     * changeStockProduct: Actualiza el inventario general.    
     */
    const changeStockProduct = (id: number, quantity: number): void => {
        const updateProduts = productsState.map(item => item.id == id  //* Busca el producto por ID y resta la cantidad comprada del stock disponible.
            ? { ...item, stock: item.stock - quantity }
            : item);
        setProductsState(updateProduts);

        addProductCart(id, quantity); // * Luego dispara la función para añadir ese producto al carrito.
    }

    /**
     * addProductCart: Gestiona la lógica de agregación al carrito.   
     */
    const addProductCart = (id: number, quantity: number): void => {
        const product = productsState.find(p => p.id === id); //*  Busca si el producto ya existe en el carrito.
        if (!product) return; // *  Si existe: Actualiza la cantidad y recalcula el total de ese item.

        const itemInCart = cart.find(item => item.id === id);//     *  Si no existe: Crea un nuevo objeto de tipo 'Cart' y lo añade a la lista.

        if (itemInCart) {
            // Caso: El producto ya está en el carrito, solo sumamos cantidades
            const updatedCart = cart.map(item =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity,
                        total: (item.quantity + quantity) * item.price
                    }
                    : item
            );
            setCart(updatedCart);
        } else {
            // Caso: Producto nuevo en el carrito
            const newItemCart: Cart = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                total: product.price * quantity
            };
            setCart([...cart, newItemCart]);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>

                    <View style={globalStyles.headerHome}>
                        <Text style={globalStyles.title}>Productos</Text>
                        <View style={globalStyles.icomHome}>
                            <Text style={globalStyles.textIconCart}>{cart.length}</Text>
                            <Icon
                                name="shopping-cart"
                                color={colores.primary}
                                size={30}
                                onPress={handleOpenCartModal}
                            />
                        </View>
                    </View>
                    {/* Lista Principal: Renderiza los productos en dos columnas  */}
                    <FlatList
                        data={productsState}
                        renderItem={({ item }) => (
                            <CardProductCommponents
                                item={item}
                                changeStockProduct={changeStockProduct}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                    <ModalCartCommponets
                        isVisible={showModal}
                        cart={cart}
                        hiddenModal={hidenModal}
                        handleEmptyCart={handleEmptyCart}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}
