import Head from "next/head";
import Layout from "../components/layout";
import Title from "../components/title";
import ButtonBar from "../components/button_bar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <ButtonBar></ButtonBar>

      <Layout>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Title></Title>
      </Layout>
    </Fragment>
  );
}
