import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import axios from "axios";

interface newsType {
  id: number;
  title: string;
  time: number;
}

const InfiniteScroll = () => {
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState<boolean>(false);
  const [start, setStart] = useState<number>(30);
  const [news, setNews] = useState<newsType[]>([]);

  const refineCatrgory = (id: number) => {
    switch (id) {
      case 0:
        return "이세돌 포커스";
      case 1:
        return "주간 왁뮤차트";
      case 2:
        return "기타";
    }
  };

  const fetchMoreData = async () => {
    setLoading(true);
    await axios.get(`/api/news?start=${start}`).then((res) => {
      setNews(news.concat(...res.data));
    });
    setStart(start + 30);
    setLoading(false);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (inView && !loading) {
      fetchMoreData();
    }
  }, [loading, news]);

  return (
    <>
      {news.map((item, index) => {
        const category = refineCatrgory(item.id % 10);

        return (
          <div className="news-item fadein" key={index}>
            <a
              href={`https://cafe.naver.com/steamindiegame/${item.id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`/static/news/${item.time}.png`}
                alt=""
                className="news-thumbnail"
              />
              <div className="trapezoid-wrap">
                <div className="news-trapezoid" id="focus" />
              </div>
              <_newsCategory>{category}</_newsCategory>
              <div className="news-title">{item.title}</div>
            </a>
          </div>
        );
      })}
      <span ref={ref}/>
    </>
  );
};

const _newsCategory = styled.p`
  color: white;
  font-weight: 700;
  position: absolute;
  width: 308px;
  text-align: center;
  margin-top: -173px;
  font-size: 14px;
`;

export default InfiniteScroll;
