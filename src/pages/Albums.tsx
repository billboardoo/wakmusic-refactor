import React from "react";
import PageIntroduce from "../components/PageIntroduce";
import Footer from "../components/Footer";
import FetchAlbums from "../components/Albums/FetchAlbums";

class Albums extends React.Component {
  render() {
    return (
      <div className="container fadein" id="dark-container">
        <PageIntroduce title="ALBUMS" />
        <FetchAlbums />
        <Footer />
      </div>
    );
  }
}

export default Albums;
