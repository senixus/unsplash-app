import React, { useEffect } from "react";
import User from "../user/User";
import { useSelector, useDispatch } from "react-redux";
import { getPhotos, getSinglePhoto } from "../../redux/actions/imageActions";
import SearchResults from "../search/SearchResults";
import Search from "../search/Search";
const ImgGallery = () => {
  const photos = useSelector((state) => state.images.photos);
  const searchPhoto = useSelector((state) => state.images.searchPhoto);

  const getPhotoWithId = (id) => dispatch(getSinglePhoto(id));
  const dispatch = useDispatch();
  const getAllPhotos = () => dispatch(getPhotos());

  useEffect(() => {
    getAllPhotos();
  }, []);

  const photoId = (id) => {
    getPhotoWithId(id);
  };

  return (
    <div>
      <Search />
      <div className="images">
        {searchPhoto.length > 0 ? (
          <SearchResults searchPhoto={searchPhoto} />
        ) : (
          photos.map((photo) => (
            <div>
              <div
                key={photo.id}
                onClick={() => photoId(photo)}
                className="img-item"
              >
                <img
                  src={photo.urls.small}
                  alt="unsplash"
                  className="unsplash"
                />

                <User photo={photo} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImgGallery;
