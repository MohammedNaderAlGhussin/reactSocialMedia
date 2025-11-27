import { useState } from "react";
import { useAppDispatch, usePostsSelector } from "../../app/hooks";
import Header from "../../components/layout/Header/Header";
import PostsList from "../../components/Posts/PostsList";
import { createPost } from "../../features/posts/postsThunk";
import { showToast } from "../../features/toast/toastSlice";
import type { AuthUser } from "../../config/types/auth.types";

const Home = () => {
  // getting user from LocalStorage
  const currentUser = window.localStorage.getItem("user")
    ? (JSON.parse(window.localStorage.getItem("user") as string) as AuthUser)
    : null;

  // Display User image and name in Post box
  const avatarUrl =
    currentUser && typeof currentUser.profile_image == "string"
      ? currentUser.profile_image
      : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png";

  const dispatch = useAppDispatch();
  const { creating } = usePostsSelector();
  const [post, setPost] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handelChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };
  const addPost = async () => {
    if (!post.trim() && !image) return;

    console.log(post);
    const result = await dispatch(createPost({ body: post, imageFile: image }));

    if (createPost.fulfilled.match(result)) {
      dispatch(
        showToast({ type: "success", message: "Post Created Successfully !" })
      );
      setPost("");
      setImage(null);
    } else {
      dispatch(
        showToast({
          type: "error",
          message: "Failed to create post!",
        })
      );
    }
  };
  return (
    <div className="min-h-screen bg-main-bg relative">
      <Header />

      <div className="container mx-auto py-5 px-3  xl:px-5 flex flex-row gap-5 mt-20">
        {/* Left */}
        <div className=" hidden md:block xl:w-1/5 xl:pr-4 w-30 h-fit shadow-lg p-3 bg-white rounded-xl sticky top-20 ">
          <h1 className="font-bold text-lg xl:pl-1 text-center xl:text-start">
            Menu
          </h1>
          <ul className="flex flex-col gap-2 px-2 xl:px-4 mt-4">
            <li className="menu-link">
              <span>👤</span>
              <p className="hidden xl:block">My Profile</p>
            </li>
            <li className="menu-link">
              <span>👥</span>
              <p className="hidden xl:block">Friends</p>
            </li>
            <li className="menu-link">
              <span>💬</span>
              <p className="hidden xl:block">Messages</p>
            </li>
            <li className="menu-link">
              <span>🔔</span>
              <p className="hidden xl:block">Notifications</p>
            </li>
            <li className="menu-link">
              <span>⚙️</span>
              <p className="hidden xl:block">Settings</p>
            </li>
          </ul>
        </div>
        {/*== Left ==*/}

        {/* Middle */}
        <div className="w-full xl:w-1/2 h-screen   rounded-xl">
          {/* Post Box */}
          <div className=" pb-3 bg-white mb-5 rounded-xl">
            <div className="flex p-4">
              <img src={avatarUrl} alt="" className="w-9 h-9 rounded-full" />
              <textarea
                value={post}
                onChange={handelChange}
                className="w-full  text-gray-900 p-2 resize-none focus:outline-none text-"
                placeholder={`What's in your mind ${currentUser?.name}?`}
              ></textarea>
            </div>
            <div className="flex items-center p-4 w-full">
              <input
                id="post-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

              <label htmlFor="post-image" className=" p-2 cursor-pointer">
                📷
              </label>

              <a href="" className="p-2">
                😎
              </a>
              <button
                onClick={addPost}
                disabled={creating}
                className={`bg-primary text-white duration-300 font-bold cursor-pointer flex items-center justify-center rounded-xl px-5 py-2 ml-auto mr-1 
                  ${
                    creating
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-hv"
                  }`}
              >
                Post
              </button>
            </div>
            {/* Preview if an image is selected */}
            {image && (
              <div className="px-4 mb-2 flex items-center">
                <span className="text-sm text-green-600  block px-4">
                  📎 {image.name}
                </span>
                <span
                  className="text-red-500 cursor-pointer w-6 h-6 flex items-center justify-center rounded-full mt-1 border border-red-500 hover:bg-red-500 hover:text-white duration-300"
                  onClick={() => setImage(null)}
                >
                  X
                </span>
              </div>
            )}
          </div>
          {/*== Post Box ==*/}
          {/* PostsList */}
          <PostsList />
          {/*== PostsList ==*/}
        </div>
        {/*== Middle ==*/}

        {/* Right */}
        <div className="p-3 xl:pr-4 bg-white rounded-xl hidden w-[30%] xl:block h-fit shadow-lg  ">
          <h1 className="font-bold text-lg pl-1">Suggestions</h1>
          <ul className="flex flex-col gap-2 px-4 mt-4">
            <li className="menu-link">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                  <p className="text-white">SK</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Sarah Kim</h1>
                  <span className="text-sec-text text-sm">
                    3 mutual friends
                  </span>
                </div>
              </div>
            </li>
            <li className="menu-link">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-primary w-10 h-10 rounded-full flex justify-center items-center">
                  <p className="text-white">MJ</p>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Mike Johnson</h1>
                  <span className="text-sec-text text-sm">
                    5 mutual friends
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*== Right ==*/}
      </div>
    </div>
  );
};

export default Home;
