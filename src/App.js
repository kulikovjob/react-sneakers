//import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect( () => {
            async function fetchData() {
                try {
                    const [cartResponse, itemsResponse] = await Promise.all([
                        axios.get('https://66a66ec223b29e17a1a2a463.mockapi.io/cart'),
                        axios.get('https://66a66ec223b29e17a1a2a463.mockapi.io/items')
                    ])

                    setIsLoading(false);
                    setCartItems(cartResponse.data)
                    //setFavorites(favoritesResponse.data)
                    setItems(itemsResponse.data)

                    // setIsLoading(true)
                    // const cartResponse = await axios.get('https://66a66ec223b29e17a1a2a463.mockapi.io/cart')
                    // //const favoritesResponse = await axios.get('https://66a66ec223b29e17a1a2a463.mockapi.io/favorites')
                    // const itemsResponse = await axios.get('https://66a66ec223b29e17a1a2a463.mockapi.io/items')
                    //
                    // setIsLoading(false)
                } catch (e) {
                    alert("Не вдалось отримати дані")
                }
            }
        fetchData()
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://66a66ec223b29e17a1a2a463.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post('https://66a66ec223b29e17a1a2a463.mockapi.io/cart', obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    }),
                );
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину');
            console.error(error);
        }
    };
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://66a66ec223b29e17a1a2a463.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
            } else {
                const { data } = await axios.post('https://66a66ec223b29e17a1a2a463.mockapi.io/favorites', obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в фавориты');
        }
    };

    const onRemoveItem = (id) => {
        try {
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
            axios.delete(`https://66a66ec223b29e17a1a2a463.mockapi.io/cart/${id}`);
        } catch (e) {
            alert("Не вдалось видалити продукт з кошику")
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    }
    return (
        <AppContext.Provider value={{ cartItems, items, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartItems, setCartOpened}}>
            <div className="wrapper clear">
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} />

                <Header onClickCart={() => setCartOpened(true)} />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                cartItems={cartItems}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddToCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                        exact
                    />
                    <Route path="/favorites" element={<Favorites/>} exact/>
                    <Route path="/orders" element={<Orders/>} exact />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
