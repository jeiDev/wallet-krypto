import Title from "~/components/apps/title";
import SubTitle from "~/components/apps/subtitle";
import CardPost from "~/components/apps/card/post";
import { CardBlogPropsI } from "~/interfaces/apps/card/card.interface";
import style from "~/styles/pages/home/section6.module.css";

const Section6 = () => {
    const items: Array<CardBlogPropsI> = [
        {
            title: "How to trade Bitcoin", 
            image: "1.png",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        },
        {
            title: "Gain the best exchange", 
            image: "2.png",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        },
        {
            title: "Reduce your loosing", 
            image: "3.png",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        },
        {
            title: "Win 50-50 trading strategy", 
            image: "4.png",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }
    ];

    return (
        <div className="container">
            <div className={style.box}>

                <Title>Crypto Market Analysis</Title>
                <SubTitle>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</SubTitle>

                <div className={style.contain}>
                    <div className="row">
                        {items.map((item, i) => (
                            <div className="col-sm-12 col-lg-6" key={i}>
                                <CardPost {...item} image={`/images/blog/${item.image}`}/>
                            </div>
                        )) }
                        <div className="col-12">
                            <div className={style.boxButton}>
                                <button className={style.button}>Enroll crypto University</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section6;