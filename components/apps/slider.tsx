import Image from "next/dist/client/image";
import { useState } from "react";
import { SliderPropsI } from "~/interfaces/apps/slider/slider.interface";
import style from "~/styles/apps/slider.module.css";

const Slider = ({items, Render, grid}: SliderPropsI) => {
    const [position, setPosition] = useState(0);
    const contains = [];
    const numContains = Math.ceil(items.length / grid);

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
            <div className={style.button} onClick={handlerBack}>
                <Image src="/images/chevron-left.png" height="15" width="15" objectFit="contain"/>
            </div>
            <div className={style.contain}>
                <div className={style.animation} style={{width: `${100  * numContains}%`, left: `-${position * 100}%`}}>
                    {contains.map((_, i) => (
                        <Slider.Items key={i} items={items.slice(grid * i, grid * (i+1))} grid={grid} Render={Render}/>    
                    ))}
                </div>
            </div>
            <div className={style.button} onClick={handlerNext}>
                <Image src="/images/chevron-right.png" height="15" width="15" objectFit="contain"/>
            </div>
        </div>
    )
}

Slider.Items = ({items, grid, Render}: SliderPropsI) => {
    const fr = `${'1fr '.repeat(grid)}`.trim();

    return (
        <div style={{display: "grid", gridTemplateColumns: fr, width: "100%"}}>
            {items.map((item, i) => (
               <div key={i}>
                   <Render item={item} index={i}/>
               </div>
            ))}
        </div>
    )
}

export default Slider;