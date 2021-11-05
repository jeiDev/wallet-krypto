import style from "~/styles/pages/home/banner.module.css";

const HomeBanner = () => {
    const cryptos = [
        "Bitcoin", "Litecoin",
        "Chainlink", "Siacoin"
    ];

    return (
        <div className={style.banner}>
            <div className={style.bg}>
                <img src="/images/banner.png" alt="banner" />
            </div>
            <div className={style.info}>
                <span className={style.title}>Next Generation</span>
                <span className={style.title}>Crypto Trading</span>

                <p className={style.subtitle}>Crypto Market Starts in</p>

                <div className={style.time}>
                    <div>
                        <span>02</span>
                        <span>Days</span>
                    </div> :
                    <div>
                        <span>12</span>
                        <span>Hours</span>
                    </div> :
                    <div>
                        <span>23</span>
                        <span>Minutes</span>
                    </div> :
                    <div>
                        <span>35</span>
                        <span>Seconds</span>
                    </div>
                </div>

                <div className={style.buttons}>
                    <button>Download app</button>
                    <button>Trade crypto</button>
                </div>

                <span className={style.lastP}>We accept</span>

                <div className={style.cryptos}>
                    <ul>
                        {cryptos.map((crypto, i) => (
                            <li key={i}>
                                <img src={`/images/cryptos/${crypto.toLowerCase()}.png`} alt={crypto} />
                                {crypto}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;
