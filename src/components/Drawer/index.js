import React from "react";

import {useCart} from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss"

function Drawer({ onClose, onRemove, items = [], opened }) {
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const { setCartItems, totalPrice} = useCart();
    const tax = totalPrice * 0.05;
    const onClickOrder = () => {
        setIsOrderComplete(true);
        setCartItems([])
    }


    return (

        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">
                    Кошик
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{ backgroundImage: `url(${obj.imgUrl})` }}
                                        className="cartItemImg"></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} UAH</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Разом:</span>
                                    <div></div>
                                    <b>{(totalPrice + tax).toFixed()} UAH </b>
                                </li>
                                <li>
                                    <span>Податок 5%:</span>
                                    <div></div>
                                    <b>{tax.toFixed()} UAH </b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className="greenButton">
                                Оформити замовлення <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isOrderComplete ? "Замовлення оформлено" : "Кошик порожній" }
                        description={isOrderComplete ? "Номер замовлення #1": "Додайте хоча б одну пару кросівок, щоб оформити замовлення"}
                        image={isOrderComplete ? "/img/complete-order.jpg": "/img/empty-cart.jpg"} />
                )}
            </div>
        </div>
    );
}

export default Drawer;