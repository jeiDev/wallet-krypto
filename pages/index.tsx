import type { NextPage } from 'next';
import Layout from '~/components/layout';
import HomeBanner from "~/components/pages/home/banner";

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <HomeBanner />
      </section>
    </Layout>
  )
}

export default Home
