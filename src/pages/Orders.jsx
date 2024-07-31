import React from 'react';
import axios from 'axios';

import Card from '../components/Card';
import AppContext from '../context';
import {Link} from "react-router-dom";

function Orders() {
    const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://60d62397943aa60017768e77.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40">
                <Link to='/'>
                    <img className='mr-20' src="/img/home.svg" alt="home"/>
                </Link>
                <h1>Мої замовлення</h1>
            </div>

            <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card key={index} loading={isLoading} {...item} />
                ))}
            </div>
        </div>
    );
}

export default Orders;