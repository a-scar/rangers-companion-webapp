// posts will be populated at build time by getStaticProps()
import { Fragment } from "react";
import Layout from "../components/layout";
import ButtonBar from "../components/button_bar";
import Head from "next/head";
import Title from "../components/title";
import { usePlayer } from "../lib/hooks";

const PlayerPage = () => {
  const player = usePlayer({ redirectTo: "/player" });
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

        {player && (
          <>
            <p>Data from logged in player:</p>
            <pre>{JSON.stringify(player, null, 2)}</pre>
          </>
        )}
      </Layout>
    </Fragment>
  );
};

export default PlayerPage;
