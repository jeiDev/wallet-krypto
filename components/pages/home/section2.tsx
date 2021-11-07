import Title from "~/components/apps/title";
import Slider from "~/components/apps/slider";
import style from "~/styles/pages/home/section2.module.css";

const Section2 = () => {

    return (
        <section className="container">
            <div className={style.contain}>
                <Title>How to Trade With Krypto</Title>
                <p style={{paddingBottom: 50}}>Tincidunt id nibh orci nibh just nulla elementum, sed vel.</p>

                <Slider 
                    grid={3}
                    items={[1,2,3,4,5,6,7,8,9]} 
                    Render={({index}) => {

                        return (
                            <div>
                                hello {index}
                            </div>
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default Section2;