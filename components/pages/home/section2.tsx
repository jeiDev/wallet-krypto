import Title from "~/components/apps/title";
import Slider from "~/components/apps/slider";
import CardPrice from "~/components/apps/card/price";
import style from "~/styles/pages/home/section2.module.css";
import { numberShort } from "~/helpers/number.helper";
import { CardPricePropsI } from "~/interfaces/apps/card/card.interface";

const Section2 = () => {

    return (
        <section className="container">
            <div className={style.contain}>
                <Title>Available Creyptos</Title>
                <p style={{paddingBottom: 50}}>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</p>

                <Slider 
                    grid={3}
                    items={[
                        {
                            title: "Bitcoin",
                            image: "bg-bitcoin.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(43700),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        },
                        {
                            title: "Litecoin",
                            image: "bg-litecoin.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(158, 3),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        },
                        {
                            title: "Ethereum",
                            image: "bg-ethereum.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(3000),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        },
                        {
                            title: "Bitcoin 2",
                            image: "bg-bitcoin.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(43700),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        },
                        {
                            title: "Litecoin 3",
                            image: "bg-litecoin.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(158, 3),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        },
                        {
                            title: "Ethereum 4",
                            image: "bg-ethereum.png",
                            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
                            price: numberShort(3000),
                            button: {
                                title: "Trade now",
                                href: "#"
                            }
                        }
                    ]} 
                    Render={({item}) => {
                        //@ts-ignore
                        const _item: CardPricePropsI = item;
                        return (
                            <CardPrice {..._item} />
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Section2;