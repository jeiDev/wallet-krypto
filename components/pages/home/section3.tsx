import Title from "~/components/apps/title";
import Image from "next/image";
import classNames from "classnames";
import style from "~/styles/pages/home/section3.module.css";

const HomeSection3 = () => {
    const items = [
        {
            title: "Weekly Trading Contest",
            icon: "ic_outline-emoji-events",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }, {
            title: "Less Commission On Trade",
            icon: "ic_outline-account-balance-wallet",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }, {
            title: "Safe And Secure Trading platform",
            icon: "ic_outline-lock",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }, {
            title: "Instant Withdraw Process",
            icon: "ic_baseline-attach-money",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }, {
            title: "Monthly Commition",
            icon: "ic_baseline-card-giftcard",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }, {
            title: "24/7 Support Team",
            icon: "ic_outline-headset-mic",
            description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus."
        }
    ]

    return (
        <section className="container">
            <div className={style.contain}>
                <Title>Attractive Features</Title>
                <p style={{ paddingBottom: 50 }}>Windaful makes playing the UK's best raffles easy and fun.</p>

                <div className={classNames("row", style.box)}>
                    {items.map((item, i) => (
                        <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                            <div className={style.card}>
                                <div className={style.cardTop}>
                                    <div>
                                        <Image src={`/images/features/${item.icon}.png`} height="45" width="45" />
                                    </div>
                                    <h6 className={style.cardTitle}>{item.title}</h6>
                                </div>
                                <p className={style.cardText}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeSection3;