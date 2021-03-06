//new Date(2020, 4, 29, 22, 00, 00, 00);
import React, { useEffect, useState } from "react";
import Page from "./Page";
import { connect } from "react-redux";
import "../Style/MainPage.css";

const MainPage = ({ filter }) => {
  const [data, setData] = useState();
  useEffect(() => {
    if (filter.type === "date") {
      if (filter.time === "all") {
        fetch(
          `http://hn.algolia.com/api/v1/search_by_date?query=&page=${filter.page}&tags=${filter.cat}`
        )
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    } else {
      fetch(
        `http://hn.algolia.com/api/v1/search?query=&page=${filter.page}&tags=${filter.cat}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    return () => {
      setData();
    };
  }, [filter.page, filter.cat, filter.type, filter.time]);

  return (
    <div class="mainpage">
      {data
        ? data.hits.map((story) => {
            return (
              <div className="main">
                <div className="main-title">
                  <h2>{story.title}</h2>
                  <a href={story.url} style={{ color: "gray" }}>
                    {" "}
                    <p> {story.url}</p>
                  </a>
                </div>
                <div className="main-down">
                  <p>{story.points + " "} points |</p>
                  <p>{story.author + " "} |</p>
                  <p>{story.created_at + " "} |</p>
                  <p>{story.num_comments} comments |</p>
                </div>
              </div>
            );
          })
        : null}
      {data ? <Page count={data.nbPages} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

export default connect(mapStateToProps)(MainPage);
