function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
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
    )
}

export default Card;