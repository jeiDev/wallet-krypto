import Image from "next/dist/client/image";
import { useEffect, useState } from "react";
import { SliderPropsI } from "~/interfaces/apps/slider/slider.interface";
import style from "~/styles/apps/slider.module.css";

const minWithForMargin = 500;
const defaultMargin = 30;
const Slider = ({items, Render, grid}: SliderPropsI) => {
    const [position, setPosition] = useState(0);
    const [margin, setMargin] = useState(30);
    const contains = [];
    const numContains = Math.ceil(items.length / grid);
    const showBTN = numContains > 1;

    useEffect(() => {
        setMargin(window.innerWidth > minWithForMargin ? defaultMargin : 0)
        window.addEventListener('resize', () => {
            const _margin = window.innerWidth > minWithForMargin ? defaultMargin : 0;
            if(_margin != margin){
                setMargin(_margin)
            }
        })
    }, [])

    for (let i = 0; i < numContains; i++) {
        contains.push(i);
    }

    const handlerBack = () => {
        setPosition(position <= 0 ? numContains - 1 : position - 1);
    }

    const handlerNext = () => {
        const index = (position + 1);
        setPosition(index >= numContains ? 0 : index);
    }

    return (
        <div className={style.container}>
            <div className={style.button} onClick={handlerBack} style={{display: showBTN ? "flex" : "none" }}>
                <Image src="/images/chevron-left.png" height="15" width="15" objectFit="contain"/>
            </div>
            <div className={style.contain}>
                <div className={style.animation} style={{width: `${100  * numContains}%`, left: `calc(-${(position > numContains ? (numContains - 1) : position) * 100}% - ${margin}px)`}}>
                    {contains.map((_, i) => (
                        <Slider.Items key={i} items={items.slice(grid * i, grid * (i+1))} grid={grid} Render={Render}/>    
                    ))}
                </div>
            </div>
            <div className={style.button} onClick={handlerNext} style={{display: showBTN ? "flex" : "none" }}>
                <Image src="/images/chevron-right.png" height="15" width="15" objectFit="contain"/>
            </div>
        </div>
    )
}

Slider.Items = ({items, grid, Render}: SliderPropsI) => {
    const fr = `${'1fr '.repeat(grid)}`.trim();

    return (
        <div className={style.boxGrid} style={{gridTemplateColumns: fr}}>
            {items.map((item, i) => (
               <div key={i} style={{width: "100%", overflow: "hidden"}}>
                   <Render item={item} index={i}/>
               </div>
            ))}
        </div>
    )
}

export default Slider;