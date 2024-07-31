import React from "react";
import Card from '../components/Card';
import {Link} from "react-router-dom";
import AppContext from '../context'
function Favorites() {
    const {favorites, onAddToFavorite, onAddToCart} = React.useContext(AppContext);
    return (
        <div className="content p-40">

            <div className="d-flex align-center mb-40">
                <Link to='/'>
                    <img className='mr-20' src="/img/home.svg" alt="home"/>
                </Link>
                <h1>Мої закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites.map((item, index) => (
                    <Card
                        key={index}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        onPlus={obj => onAddToCart(obj)}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;