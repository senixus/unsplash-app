import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPhoto } from "../../redux/actions/imageActions";

const Search = () => {
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();

  const getPhoto = (photo) => dispatch(searchPhoto(photo));

  const handleChange = (e) => {
    const word = e.target.value;
    setPhoto(word);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPhoto(photo);
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSubmit}>
        <input
          className="search-bar"
          type="text"
          onChange={handleChange}
          placeholder="Search Photo"
          value={photo}
          name="photo"
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
