import React from "react";
import styled from "styled-components";
import PageIntroduce from "../components/PageIntroduce";
import Footer from "../components/Footer";
import FetchAlbums from "../components/Albums/FetchAlbums";

const Albums = () => {
  return (
    <_Wrapper>
      <PageIntroduce title="ALBUMS" />
      <FetchAlbums />
      <Footer />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3e5eb;
  animation: fadein 0.5s;
  width: 100vw;
  min-height: 100vh;
`;

export default Albums;
