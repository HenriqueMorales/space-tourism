import Container from "@/Components/Container";
import ExploreButton from "@/Components/ExploreButton";
import Header from "@/Components/Header";
import TextWrapper from "@/Components/TextWrapper";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <TextWrapper />
        <ExploreButton />
      </Container>
    </>
  );
};

export default Home;
