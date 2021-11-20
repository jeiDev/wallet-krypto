import Image from "next/image";
import { CardCommentaryPropsI } from "~/interfaces/apps/card/card.interface";
import style from "~/styles/apps/card/card-commentary.module.css";

const CardCommentary = ({description, image, job, name}: CardCommentaryPropsI) => {
    return (
        <div className={style.box}>
            <Image src="/images/quote.png" height="50" width="50"/>
            <p className={style.description}>{description}</p>
            <Image src={`/images/users/commentary/${image}`} height="35" width="35"/>
            <strong className={style.name}>{name}</strong>
            <span className={style.job}>{job}</span>
        </div>
    )
}

export default CardCommentary;