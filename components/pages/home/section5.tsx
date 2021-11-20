import Title from "~/components/apps/title";
import Slider from "~/components/apps/slider";
import CardCommentary from "~/components/apps/card/commentary";
import style from "~/styles/pages/home/section2.module.css";
import { CardCommentaryPropsI } from "~/interfaces/apps/card/card.interface";
import { useEffect, useState } from "react";
import breakPoint from "~/helpers/break-point";
import SubTitle from "~/components/apps/subtitle";

const Section5 = () => {
    const [grid, setGrid] = useState(3);

    useEffect(() => {
        breakPoint((grid: number) => {
            if(!grid) return;
            setGrid(grid);
        })
    }, []);

    const items: Array<CardCommentaryPropsI> = [
        {
            name: "Cameron Williamson",
            job: "FX Trader",
            image: "1.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
        {
            name: "Bessie Cooper",
            job: "Stock Manager",
            image: "2.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
        {
            name: "Albert Flores",
            job: "Crypto Analyst",
            image: "3.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
        {
            name: "Cameron Williamson 2",
            job: "FX Trader",
            image: "1.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
        {
            name: "Bessie Cooper 3",
            job: "Stock Manager",
            image: "2.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
        {
            name: "Albert Flores 4",
            job: "Crypto Analyst",
            image: "3.png",
            description: "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        },
    ]

    return (
        <div className="container">
            <div className={style.contain}>
                <Title>30 Million Users Worldwide</Title>
                <SubTitle>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</SubTitle>

                <Slider 
                    grid={grid}
                    items={items} 
                    Render={({item}) => {
                        const _item: CardCommentaryPropsI = item;
                        return (
                            <CardCommentary {..._item} />
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default Section5;