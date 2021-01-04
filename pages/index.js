import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";
import NavBar from "../components/nav_bar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <NavBar></NavBar>

      <Layout>
        <Head>
          <title>Rangers Companion App</title>
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        Home page content will be here ok
      </Layout>
    </Fragment>
  );
}
