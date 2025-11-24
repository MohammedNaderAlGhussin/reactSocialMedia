import { usePostsSelector } from "../../app/hooks";
import Header from "../../components/layout/Header/Header";
import PostCard from "../../components/Posts/PostCard";
import type { AuthUser } from "../../config/types/auth.types";

const Profile = () => {
  const user = window.localStorage.getItem("user")
    ? (JSON.parse(window.localStorage.getItem("user") as string) as AuthUser)
    : null;

  const { posts } = usePostsSelector();
  // Rendering user profile posts
  const userPosts = posts
    .filter((post) => post.author.id === user?.id)
    .map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="min-h-screen bg-main-bg ">
      <Header />
      <div className=" container mx-auto py-5 px-3  xl:px-5 flex flex-row gap-5 mt-20">
        <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
          {/* Profile */}
          <div className=" pb-3 bg-white mb-5 rounded-xl relative">
            <div className="linear rounded-t-xl h-40"></div>
            {/* Avatar */}
            <div className="hidden sm:flex w-25 h-25 border-2 border-white rounded-full linear  text-white  items-center justify-center text-2xl  absolute top-28 left-5 xl:left-10">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            {/*== Avatar ==*/}
            <div className="container mx-auto w-1/2 lg:w-[65%] flex flex-col gap-4 items-sart mt-5  pb-4">
              <div className="">
                <h1 className="font-bold text-2xl">{user?.name}</h1>
                <p className="text-sec-text">@{user?.username}</p>
              </div>
              <div className="">
                <ul className="flex gap-3 font-bold text-xl">
                  <li>
                    <p>245</p>
                    <span className="text-sec-text text-sm font-normal">
                      Posts
                    </span>
                  </li>
                  <li>
                    <p>1.2k</p>
                    <span className="text-sec-text text-sm font-normal">
                      Followers
                    </span>
                  </li>
                  <li>
                    <p>892</p>
                    <span className="text-sec-text text-sm font-normal">
                      Following
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 mt-3">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hv duration-300 cursor-pointer">
                  Edit Profile
                </button>
                <button className="bg-main-bg  px-4 py-2 rounded-md hover:bg-gray-400 hover:text-white cursor-pointer duration-300">
                  Share Profile
                </button>
              </div>
            </div>
          </div>
          {/*== Profile ==*/}
          {/* Posts */}
          <div className="pb-5">
            {userPosts.length > 0 ? (
              userPosts
            ) : (
              <p className="bg-white mb-5 rounded-xl cursor-pointer p-4 text-center text-gray-500 text-xl">
                No posts yet
              </p>
            )}
          </div>
          {/*== Posts ==*/}
        </div>
      </div>
    </div>
  );
};

export default Profile;
