import React from "react";
import Header from "./Header/Header";
import VideoList from "./VideoList/VideoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <VideoList />
      </div>
    );
  }
}

export default App;
