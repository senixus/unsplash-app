import React from "react";
import User from "../user/User";

const SearchResults = ({ searchPhoto }) => {
  return (
    <div>
      {searchPhoto.map((photo) => (
        <div key={photo.id}>
          <div className="img-item">
            <img src={photo.urls.small} alt="unsplash" className="unsplash" />
            <User photo={photo} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
