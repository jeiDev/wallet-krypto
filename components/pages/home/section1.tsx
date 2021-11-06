import Title from "~/components/apps/title";
import style from "~/styles/pages/home/section1.module.css";
import classNames from "classnames";

const HomeSection1 = () => {

    const steps = [
        "Create an account",
        "Download platfrom",
        "Select crypto",
        "Start trading"
    ]

    return (
        <section className="container">
            <div className={style.section}>
                <Title>How to Trade With Krypto</Title>
                <p>Tincidunt id nibh orci nibh just nulla elementum, sed vel.</p>

                <div className={style.contain}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className={style.boxVideo}>
                                <img src="/images/phone-video.png" alt="phone video" />
                                <div className={style.btnPlay}>
                                    <img src="/images/play.png" alt="play" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className={style.boxSteps}>
                                <span className={style.title}>Steps to trade</span>
                                <ul>
                                    {steps.map((step, i) => (
                                        <li key={i} className={classNames(style.step, i == 1 ? style.stepActive : "")}>
                                            <div className={style.number}>0{i+1}</div>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection1