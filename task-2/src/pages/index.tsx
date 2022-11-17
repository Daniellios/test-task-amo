import type { NextPage } from "next";
import Head from "next/head";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AMO-CRM</title>
        <meta name="description" content="Тестовое задание" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto flex h-full min-h-screen w-full max-w-[1140px] flex-col  justify-between  sm:px-4 sm:pt-[46px]">
        <Header></Header>

        <Content></Content>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
