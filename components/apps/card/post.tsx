import Link from "next/link";
import Image from "next/image";
import { CardBlogPropsI } from "~/interfaces/apps/card/card.interface";
import style from "~/styles/apps/card/card-post.module.css"

const CardPost = ({image, title, description}: CardBlogPropsI) => {

    return (
        <div className={style.box}>
           <div className={style.boxImage}>
                <Image src={image} height="160" width="160"/>
           </div>
           <div className={style.boxInfo}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                <button className={style.button}>
                    <Link href="#">
                        <a>Learn more</a>
                    </Link>
                </button>
           </div>
          
        </div>
    )
}

export default CardPost;