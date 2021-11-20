import classNames from "classnames";
import Title from "~/components/apps/title";
import style from "~/styles/pages/home/section4.module.css";

const Section4 = () => {

    return (
        <section className={style.section}>
            <div className="container">
                <div className={style.box}>
                    <Title>Most advanced crypto trading<br/> platfrom ever!</Title>
                    <div className={style.boxStoreApp}>
                        <div className={classNames(style.storeApp, style.googlePlay)}></div>
                        <div className={classNames(style.storeApp, style.appStore)}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4;