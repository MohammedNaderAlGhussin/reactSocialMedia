import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Loader from "../../components/common/Loader/Loader";
import ErrorMsg from "../../components/common/Error/ErrorMsg";
import PostCard from "../../components/Posts/PostCard";

import { useAppDispatch, useUserProfileSelector } from "../../app/hooks";
import {
  fetchUserProfile,
  fetchUserPosts,
} from "../../features/userProfile/userProfileThunk";
import { resetUserProfile } from "../../features/userProfile/userProfileSlice";

const Profile = () => {
  const { id } = useParams();

  const profileId = id ? Number(id) : null;
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user")!)
    : null;

  const dispatch = useAppDispatch();

  const {
    user: profileUser,
    posts: profilePosts,
    loadingUser,
    loadingPosts,
    errorUser,
    errorPosts,
  } = useUserProfileSelector();

  const myId = currentUser.id;

  const isMe = profileId === null || profileId === myId;

  const finalId = isMe ? myId : profileId;

  useEffect(() => {
    if (!finalId) return;

    dispatch(fetchUserProfile(finalId));
    dispatch(fetchUserPosts(finalId));

    return () => {
      dispatch(resetUserProfile());
    };
  }, [finalId, dispatch]);

  if (loadingUser || (loadingPosts && !profileUser)) {
    return (
      <div className="min-h-screen">
        <Header />
        <Loader />
      </div>
    );
  }

  if (errorUser || (errorPosts && !profileUser)) {
    return (
      <div className="min-h-screen">
        <Header />
        <Loader />
        <ErrorMsg message={errorUser || errorPosts || "Something went wrong"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main-bg">
      <Header />

      <div className="container mx-auto py-5 px-3 xl:px-5 flex flex-row gap-5 mt-20">
        <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
          <div className="pb-3 bg-card-bg mb-5 rounded-xl relative">
            <div className="linear rounded-t-xl h-40"></div>

            <div className="hidden sm:flex w-25 h-25 border-2 border-light-border rounded-full linear text-white items-center justify-center text-2xl absolute top-28 left-10">
              {profileUser?.name?.[0]?.toUpperCase() || "U"}
            </div>

            <div className="container mx-auto w-1/2 lg:w-[65%] flex flex-col gap-4 mt-5 pb-4">
              <div>
                <h1 className="font-bold text-2xl">{profileUser?.name}</h1>
                <p className="text-sec-text">@{profileUser?.username}</p>
              </div>

              <ul className="flex gap-3 font-bold text-xl">
                <li>
                  <p>{profileUser?.posts_count || 0}</p>
                  <span className="text-sec-text text-sm font-normal">
                    Posts
                  </span>
                </li>
                <li>
                  <p>—</p>
                  <span className="text-sec-text text-sm font-normal">
                    Followers
                  </span>
                </li>
                <li>
                  <p>—</p>
                  <span className="text-sec-text text-sm font-normal">
                    Following
                  </span>
                </li>
              </ul>
              {isMe && (
                <div className="flex gap-3 mt-3 w-[234px]">
                  <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hv duration-300 cursor-pointer text-sm md:text-md ">
                    Edit Profile
                  </button>
                  <button className="bg-main-bg px-4 py-2 rounded-md hover:bg-gray-400 hover:text-white cursor-pointer duration-300 text-sm md:text-md">
                    Share Profile
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="pb-5">
            {loadingPosts && <Loader />}

            {profilePosts.length > 0 ? (
              profilePosts.map((post) => <PostCard key={post.id} {...post} />)
            ) : (
              <p className="bg-card-bg mb-5 rounded-xl p-4 text-center text-gray-500 text-xl">
                No posts yet
              </p>
            )}

            {errorPosts && <ErrorMsg message={errorPosts} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
