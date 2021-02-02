import React, { useEffect, useState } from "react";
import Page from "./Page";
import { connect } from "react-redux";

const MainPage = ({ filter }) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://hn.algolia.com/api/v1/search?query=&page=${filter.page}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    return () => {
      setData();
    };
  }, [filter.page]);

  return (
    <div>
      {data
        ? data.hits.map((story) => {
            return (
              <div>
                <div>
                  <h2>{story.title}</h2>
                  <p> {story.url}</p>
                </div>
                <div>
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
  return { filter: state.filter };
};

export default connect(mapStateToProps)(MainPage);
