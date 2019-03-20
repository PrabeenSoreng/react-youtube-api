import React from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
