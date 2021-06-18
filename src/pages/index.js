import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Fidel Hernandez - Software Engineer</title>
        <meta name="description" content="Fidel Hernandez personal portfolio" />

        <meta property="og:url" content="https://fidelhernandez.netlify.app/" />
        <meta
          property="og:image"
          content="/images/Personal-Website-Thumbnail.png"
        />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        {/* <Acomplishments /> */}
      </Layout>
    </div>
  );
};

export default Home;
