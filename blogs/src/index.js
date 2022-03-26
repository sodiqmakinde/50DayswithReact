import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import latestdata from "./latestdata";
import topdata from "./topdata";
import Latest from "./Latest";
import TopNew from "./TopNew";

function App() {
  const latest = latestdata.map((item) => {
    return <Latest item={item} />;
  });

  const recents = topdata.map((item) => {
    return <TopNew item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Banner />
      {latest}

      <div className="container other_blog">{recents}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
