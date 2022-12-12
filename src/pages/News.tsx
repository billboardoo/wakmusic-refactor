import React, { useEffect } from "react";
import styled from "styled-components";
import PageIntroduce from "../components/PageIntroduce";
import Footer from "../components/Footer";
import InfiniteScroll from "../components/News/InfiniteScroll";

const News = () => {
  const componentDidMount = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <div className="container fadein">
      <_NewsBody>
        <PageIntroduce title="NEWS" />
        <div id="news-section">
          <InfiniteScroll />
        </div>
      </_NewsBody>
      <Footer />
    </div>
  );
};

const _NewsBody = styled.div`
  background-color: #e3e5eb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default News;
