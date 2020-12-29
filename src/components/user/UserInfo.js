import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UsersPhotos from "./UsersPhotos";
import { getUser, searchUser } from "../../redux/actions/imageActions";

const UserInfo = () => {
  const { username } = useParams();
  const users = useSelector((state) => state.images.user);
  const dispatch = useDispatch();
  const getSearchUser = (username) => dispatch(searchUser(username));
  const searchedUser = useSelector((state) => state.images.searchUser);
  const getUserInfo = (username) => dispatch(getUser(username));

  useEffect(() => {
    getUserInfo(username);
    getSearchUser(username);
  }, []);

  return (
    <div className="container">
      {searchedUser.length &&
        searchedUser.map((user) =>
          user.username === username ? (
            <div className="user-info" key={user.id}>
              <div className="user-info-container">
                <div className="user-unsplash-div">
                  <img
                    src={user.profile_image.large}
                    alt="user unsplash"
                    className="user-unsplash"
                  />
                </div>
                <div className="user-socials-info">
                  <div className="name">
                    <h2>{user.name}</h2>
                  </div>
                  <div className="bio">
                    <p>{user.bio}</p>
                  </div>
                  <div className="location">
                    <p>
                      <i
                        className="fas fa-map-marker-alt"
                        style={{ color: "#767676" }}
                      ></i>{" "}
                      {user.location}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i
                        className="fas fa-globe-americas"
                        style={{ color: "#767676" }}
                      ></i>{" "}
                      {user.portfolio_url}
                    </p>
                  </div>

                  <div className="interest-section">
                    <div className="counts">
                      <div>
                        <p>
                          <i className="fa fa-user-friends"></i>{" "}
                          {users.followers_count}
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="fas fa-user-plus"></i>{" "}
                          {users.following_count}
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="fas fa-image"></i> {user.total_photos}
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="fas fa-heart"></i> {user.total_likes}
                        </p>
                      </div>
                      <div>
                        <p>
                          <i className="fas fa-hdd"></i>{" "}
                          {user.total_collections}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <UsersPhotos userInfo={user} />
            </div>
          ) : null
        )}
    </div>
  );
};

export default UserInfo;
