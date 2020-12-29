import React from "react";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/actions/imageActions";
import { useDispatch } from "react-redux";

const User = ({ photo }) => {
  const dispatch = useDispatch();
  const getUserName = (username) => dispatch(getUser(username));

  return (
    <div className="user-section">
      <div className="user-pics">
        <img src={photo.user.profile_image.large} alt="unsplash" />
      </div>
      <div className="user-name">
        <Link
          to={`/users/${photo.user.username}`}
          onClick={() => getUserName(photo.user.username)}
        >
          {photo.user.name}
        </Link>
      </div>
    </div>
  );
};

export default User;
