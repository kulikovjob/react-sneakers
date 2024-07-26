function App() {
    return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="logo"/>
            <div>
                <h3 className="text-uppercase">React sneakers</h3>
                <p className="opacity-5">Магазин найкращих кросівок</p>
            </div>
        </div>
        <ul className="d-flex">
            <li className="mr-30">
                <img src="/img/cart.svg" alt="cart"/>
                <span>1205 UAH</span>
            </li>
            <li>
                <img src="/img/user.svg" alt="user"/>
            </li>
        </ul>
        </header>
        <div className="content p-40">
            <h1 className="mb-40">Всі кросівки</h1>

            <div className="d-flex">
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>5 850 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>5 850 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>5 850 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>5 850 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
