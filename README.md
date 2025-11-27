
# 🌐 Social Media App (Tarmeez Academy API)

A fully responsive **front-end social media website** built from **zero**, using the **Tarmeez Academy learning API**.
Designed, structured, and implemented entirely by me (**Front-End React Developer**) to demonstrate clean architecture, strong typing, scalability, and real-world best practices.

---

## 📌 About the Project

This is a feature-rich social media interface that interacts with a shared learning API, meaning:

* The API is publicly accessible for learning purposes.
* Many users already exist and use the API — so you’ll see **real posts from others** and multiple accounts.
* The backend behavior (e.g., default "hello world") is part of the API’s learning environment.
* This project focuses on the **client-side implementation, design, state structure, and UI logic**.

---

## 🧩 Folder Structure & Architecture (Core Strength)

```
📦src
 ┣ 📂app                → Redux store setup, typed hooks
 ┣ 📂components         → All reusable & layout-based UI components
 ┃ ┣ 📂common           → Shared UI elements (Input, Button, Logo, Toast, etc.)
 ┃ ┣ 📂layout           → Header, Navigation, Sidebar, etc.
 ┃ ┗ 📂Posts            → Post rendering, edit/delete modals, image upload UI, pagination UI
 ┣ 📂config             → Axios config, API services, global types
 ┃ ┣ 📂services         → API service modules (AuthService, PostService)
 ┃ ┣ 📂types            → API response & payload type definitions
 ┃ ┗ 📜axios.config.ts  → API instance setup, interceptors
 ┣ 📂features           → Redux slices, async thunks, feature-specific types
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜authSlice.ts       → Login/Register reducers
 ┃ ┃ ┣ 📜authThunk.ts       → Async API calls (login, register)
 ┃ ┃ ┗ 📜auth.types.ts      → Auth payloads & response types
 ┃ ┗ 📂posts
 ┃   ┣ 📜postsSlice.ts      → Fetching, Edit, Delete reducers
 ┃   ┣ 📜postsThunk.ts      → Async API calls (get posts, create, delete, edit, upload images)
 ┃   ┗ 📜posts.types.ts     → Post object, author, payload types
 ┣ 📜hooks.ts           → Custom reusable hooks (selectors, filters, modals, form handling)
 ┗ 📜routes             → Protected & public routing
```

### 🔍 Why this structure matters?

✅ Every major feature has:

1. A dedicated **slice** for its UI state
2. A separate **async thunk** for API actions
3. Fully defined **TypeScript types for payloads & responses**

This separation provides:

* **Clean scalability** ✅
* **Easy modification** ✅
* **Safe typing & validation** ✅
* **Readable and testable code** ✅
* **No mixed logic or tangled files** ✅

---

## 🔐 Authentication & Authorization

* Login and register implemented using **Redux Toolkit async thunks**
* Token and user data are **securely saved in localStorage**
* Routes are protected — unauthenticated users **cannot visit**:

```
/home
/profile/:id
```

Implemented using a reusable `ProtectedRoute` component powered by React Router.

---

## 🌟 Implemented Features

| Feature                                            | Status |
| -------------------------------------------------- | ------ |
| Login & Registration                               | ✅      |
| Token Storage (localStorage)                       | ✅      |
| Fetch All Posts                                    | ✅      |
| Create a Post (with text or image)                 | ✅      |
| Edit & Delete Posts                                | ✅      |
| Edit/Delete option shown **only for user’s posts** | ✅      |
| Prevent unauthorized post modification             | ✅      |
| Comments UI                                        | ✅      |
| Pagination support                                 | ✅      |
| Image Upload                                       | ✅      |
| Fully Typed Redux Slices & API Responses           | ✅      |
| Custom Global Hooks (`src/hooks.ts`)               | ✅      |
| Protected Routes                                   | ✅      |
| Reusable UI Components                             | ✅      |
| Toast feedback for all actions                     | ✅      |
| Responsive UI (mobile/tablet/desktop)              | ✅      |
| Animations (Framer Motion)                         | ✅      |
| `.env` config with TypeScript definitions          | ✅      |

### 🧠 Additional logic included:

* UI hides edit/delete actions for posts not belonging to the logged-in user
* Only logged-in user’s posts show management options
* Toast notifications improve user experience
* Full responsiveness using **Tailwind media queries**
* Global feature selectors via custom hooks

---

## 🛠️ Built With

**Core Stack:**

* ⚛️ **React (Initialized with Vite)** — project bootstrapped using `npm create vite`, not `npx`
* 🟦 **TypeScript** — everything is strongly typed (API responses, Redux state, payloads)
* 🎨 **TailwindCSS v4+**
* 🧭 **React Router** — public + protected routing
* 🧰 **Redux Toolkit** — state management, slices, async thunks
* 🔥 **Axios** — API calls & error handling
* 🎞️ **Framer Motion** — UI animations
* 🍞 **Local Storage** — token and user data persistence

**Development Environment:**

* ⚡ Built with **Vite**
* 🌍 Deployed on **Vercel**

---

## 🚀 Getting Started

### 1️⃣ Clone the project

```
git clone https://github.com/MohammedNaderAlGhussin/reactSocialMedia.git
cd reactSocialMedia
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run development server

```
npm run dev
```

---

## 🌍 Deployment

The app is deployed using **Vercel** and works live with real users from the shared learning API.

---

## 🖼️ Screenshots

*(Screenshots coming soon — placeholder section for UI preview)*

---

## 📎 API Credit

> The API is created by **Tarmeez Academy** for learning purposes.
> Multiple users have access to it, so you may find posts from other student-built applications, and many active accounts posting real content.

---

## 🏆 What makes this project special

* 💼 **Professional, modular folder architecture**
* 🧠 **Redux slices are split into logical domains**
* 🟦 **All API payloads & state are well-typed**
* 🔐 **Page access is restricted when not authenticated**
* ♻️ **Reusable UI/logic components**
* 🧩 **Edit/Delete actions shown only for user-owned posts**
* 💬 **Comments UI included**
* 📄 **Pagination support**
* 🎞️ **Smooth animations**
* 🚀 **Scalable structure for future enhancement**
* 🔒 Environment variables defined but **not committed**, typed using `.env.d.ts`

---

## 🤝 Future Enhancements

This project is ready to scale into:

* Likes & reactions
* Follow / Unfollow UI
* Notifications panel
* Real-time updates
* Post tagging system
* Content publishing dashboard

---

## 📝 License

No license assigned to this project.

---

## ✨ Author

**Mohammed Nader AlGhussin**
Front-End React.js Developer
Project Built from Scratch using Vite + deployed on Vercel 🇵🇸🚀
