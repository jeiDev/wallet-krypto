import { CardPricePropsI } from "~/interfaces/apps/card/card.interface";
import Link from "next/link";
import style from "~/styles/apps/card/card-price.module.css";

const CardPrice = ({title, description, price, button, image} : CardPricePropsI) => {
    
    return (
        <div className={style.container}>
            <div className={style.boxImg}>
                <div className={style.imgBG}></div>
                <img src={`/images/bg-crypto/${image}`} alt={image} />
            </div>
            <div className={style.contain}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{description}</p>

                <div className={style.footer}>
                    <span className={style.price}>${price}</span>
                    <div className={style.button}>
                        <Link href={button.href}>
                            <a>{button.title}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrice;