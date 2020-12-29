import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserPhotos } from "../../redux/actions/imageActions";

const UsersPhotos = ({ userInfo }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.images.userPhotos);
  const getUserAllPhotos = (user) => dispatch(getUserPhotos(user));

  useEffect(() => {
    getUserAllPhotos(userInfo.username);
  });

  return (
    <div className="user-photos">
      {user.length &&
        user.map((photo) => (
          <div key={photo.id} className="img-item">
            <img src={photo.urls.small} className="unsplash" alt="unsplash" />
          </div>
        ))}
    </div>
  );
};

export default UsersPhotos;
