import { Demo, Header } from "@webriq-test/components";
import { LandingPage, Layout } from "@webriq-test/components/dist/server";
import { Core } from "nextjs-darkmode";
import React, { useCallback } from "react";
import { LoaderContainer, useLoader } from "react18-loaders";
import { Bars1 } from "react18-loaders/dist/server";
import "./styles.css";

/** Vite App */
function App(): JSX.Element {
  const { setLoading } = useLoader();
  const handleClick = useCallback(() => setLoading(true), []);
  return (
    <Layout>
      <Core t="background .5s" />
      <Header />
      <LandingPage title="Vite Example">
        <Demo />
      </LandingPage>
      <button onClick={handleClick}>Show loader</button>
      <LoaderContainer>
        <Bars1 color="red" width={50} />
      </LoaderContainer>
    </Layout>
  );
}

export default App;
