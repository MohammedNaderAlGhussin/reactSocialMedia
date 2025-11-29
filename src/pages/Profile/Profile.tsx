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
  const params = useParams();
  const profileIdFromUrl = params.id ? Number(params.id) : null;
  const loggedUser = JSON.parse(localStorage.getItem("user")!); // or from store
  const isMe = !profileIdFromUrl || loggedUser.id === profileIdFromUrl;
  const profileId = isMe ? loggedUser.id : profileIdFromUrl;

  const dispatch = useAppDispatch();

  const {
    user: profileUser,
    posts: profilePosts,
    loadingUser,
    loadingPosts,
    errorUser,
    errorPosts,
  } = useUserProfileSelector();

  // Fetch correct data depending on whether it's your own profile or another user's
  useEffect(() => {
    if (!profileId) return; // stop if still undefined

    dispatch(fetchUserProfile(profileId));
    dispatch(fetchUserPosts(profileId));

    return () => {
      dispatch(resetUserProfile()); // okay now
    };
  }, [profileId, isMe, dispatch]);

  // Select which data to display
  const userToDisplay = isMe ? loggedUser : profileUser;
  const postsToDisplay = isMe
    ? profilePosts.filter((p) => p.author.id === loggedUser.id)
    : profilePosts;

  // Loading
  if ((loadingUser || loadingPosts) && !userToDisplay) {
    return (
      <div className="min-h-screen">
        <Header />
        <Loader />
      </div>
    );
  }

  // Errors
  if ((errorUser || errorPosts) && !userToDisplay) {
    return (
      <div className="min-h-screen">
        <Header />
        <ErrorMsg message={errorUser || errorPosts || "Something went wrong"} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-main-bg">
      <Header />

      <div className="container mx-auto py-5 px-3 xl:px-5 flex flex-row gap-5 mt-20">
        <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
          {/* Profile Header */}
          <div className="pb-3 bg-card-bg mb-5 rounded-xl relative">
            <div className="linear rounded-t-xl h-40"></div>

            {/* Avatar */}
            <div className="hidden sm:flex w-25 h-25 border-2 border-light-border rounded-full linear text-white items-center justify-center text-2xl absolute top-28 left-5 xl:left-10">
              {userToDisplay?.name?.[0]?.toUpperCase()}
            </div>

            <div className="container mx-auto w-1/2 lg:w-[65%] flex flex-col gap-4 mt-5 pb-4">
              <div>
                <h1 className="font-bold text-2xl">{userToDisplay?.name}</h1>
                <p className="text-sec-text">@{userToDisplay?.username}</p>
              </div>

              <div>
                <ul className="flex gap-3 font-bold text-xl">
                  <li>
                    <p>
                      {userToDisplay?.posts_count ??
                        postsToDisplay?.length ??
                        0}
                    </p>
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
              </div>

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

          {/* Posts */}
          <div className="pb-5">
            {loadingPosts && !isMe && <Loader />}

            {postsToDisplay.length > 0 ? (
              postsToDisplay.map((post) => <PostCard key={post.id} {...post} />)
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
