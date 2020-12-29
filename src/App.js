import React from "react";
import ImgGallery from "./components/img-gallery/ImgGallery";
import { Switch, Route } from "react-router-dom";
import UserInfo from "./components/user/UserInfo";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={ImgGallery} />
        <Route path="/users/:username" component={UserInfo} />
      </Switch>
    </div>
  );
}

export default App;
