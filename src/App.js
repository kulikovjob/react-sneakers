import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
function App() {
    return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Всі кросівки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Пошук..."/>
                </div>
            </div>

            <div className="d-flex">
                <Card/>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>6 440 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers_1"/>
                    <h5>Чоловічі Кросівки Nike Blazer Mid Sued</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>4 250 UAH</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers_1"/>
                    <h5>Кросівки Puma X Aka Boku Future Rider</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Ціна:</span>
                            <b>8 850 UAH</b>
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
