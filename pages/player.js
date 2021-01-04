// posts will be populated at build time by getStaticProps()
import { Fragment } from "react";
import Layout from "../components/layout";
import NavBar from "../components/nav_bar";
import Title from "../components/title";
import { usePlayer } from "../lib/hooks";
import CharacterCard from "../components/character_card";

const PlayerPage = () => {
  const player = usePlayer({ redirectTo: "/player" });
  return (
    <Fragment>
      <NavBar></NavBar>

      <Layout>
        {/*<Title></Title>*/}

        {player && (
          <>
            <CharacterCard ranger={player.ranger}></CharacterCard>

            {/*<p>Data from logged in player:</p>*/}
            {/*<pre>{JSON.stringify(player.ranger.name, null, 2)}</pre>*/}
          </>
        )}
      </Layout>
    </Fragment>
  );
};

export default PlayerPage;
