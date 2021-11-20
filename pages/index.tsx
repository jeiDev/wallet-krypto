import type { NextPage } from 'next';
import Layout from '~/components/layout';
import HomeBanner from "~/components/pages/home/banner";
import HomeSection1 from "~/components/pages/home/section1";
import HomeSection2 from "~/components/pages/home/section2";
import HomeSection3 from "~/components/pages/home/section3";
import HomeSection4 from "~/components/pages/home/section4";
import HomeSection5 from "~/components/pages/home/section5";
import HomeSection6 from "~/components/pages/home/section6";
import style from "~/styles/pages/home/home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={style.home}>
        <HomeBanner />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
      </section>
    </Layout>
  )
}

export default Home
