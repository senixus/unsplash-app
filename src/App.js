import React from "react";
import ImgGallery from "./components/img-gallery/ImgGallery";
import { Switch, Route } from "react-router-dom";
import UserInfo from "./components/user/UserInfo";
import UsersPhotos from "./components/user/UsersPhotos";

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
