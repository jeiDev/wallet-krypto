import type { NextPage } from 'next';
import Layout from '~/components/layout';
import HomeBanner from "~/components/pages/home/banner";
import HomeSection1 from "~/components/pages/home/section1";
import HomeSection2 from "~/components/pages/home/section2";
import style from "~/styles/pages/home/home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={style.home}>
        <HomeBanner />
        <HomeSection1 />
        <HomeSection2 />
      </section>
    </Layout>
  )
}

export default Home
