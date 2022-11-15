import React from "react";
import Footer from "../components/Footer";
import PageIntroduce from "../components/PageIntroduce";
import FetchTeams from "../components/Teams/FetchTeams";

const Teams = () => {
  return (
    <div className="container fadein">
      <div id="ellipses">
        <div id="ellipse_10" />
        <div id="ellipse_11" />
        <div id="ellipse_12" />
        <div id="ellipse_13" />
        <div id="ellipse_14" />
        <div id="ellipse_15" />
        <div id="ellipse_16" />
      </div>
      <div className="teams-body">
        <PageIntroduce title="TEAMS" color="#ffffff" />
        <div id="teams-wrap">
          <FetchTeams />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
