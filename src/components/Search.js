import React, { useEffect, useState } from "react";
import Page from "./Page";
import { connect } from "react-redux";

const Search = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `http://hn.algolia.com/api/v1/search?query=${props.match.params.id}&page=${props.filter.page}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
    return () => {
      setData();
    };
  }, [props.filter.page, props.match.params.id]);

  return (
    <div className="mainpage">
      {data
        ? data.hits.map((story) => {
            return (
              <div className="main">
                <div className="main-title">
                  <h2>{story.title}</h2>
                  <p> {story.url}</p>
                </div>
                <div className="main-down">
                  <p>{story.points} points</p>
                  <p>{story.author}</p>
                  <p>{story.created_at}</p>
                  <p>{story.num_comments} comments</p>
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
  return { filter: state.filter, search: state.search.term };
};

export default connect(mapStateToProps)(Search);
