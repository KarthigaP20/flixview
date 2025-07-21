# 🎬 [Netflix Clone](https://netflixclone-orcin-nine.vercel.app) - Full Stack Web App

A **Netflix-style login/signup platform** built with **React, Vite, Tailwind CSS**, and a **Node.js + Express backend**. It provides a clean UI with real-time form validation, error handling, and integration between frontend and backend using Axios. Deployed using **Vercel** (Frontend) and **Render** (Backend).

## 🚀 Features

✅ **Responsive Netflix UI Clone**: Sign In and Sign Up interfaces designed to replicate Netflix’s clean UI  
✅ **Form Validation**: Checks for empty fields, email format, and password length  
✅ **Backend Integration**: Axios is used to POST/GET data from Node.js backend  
✅ **Error Handling**: Shows appropriate messages for invalid login, already existing user, and not found user  
✅ **In-Memory Authentication**: Temporary user data handling without database (ideal for learning)  
✅ **Routing**: React Router DOM used to switch between routes without reload  
✅ **Deployment Ready**: Frontend on Vercel, Backend on Render  
✅ **Screenshots Included**: Project includes high-quality screenshots for documentation  

## 🛠️ Tech Stack

### 🖥️ Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

### ⚙️ Backend
- Node.js
- Express.js
- CORS

### 🌍 Deployment
- Vercel (Frontend)
- Render (Backend)

## 📂 Folder Structure

NETFLIX-CLONE/
├── backend/
│ ├── index.js
│ ├── package.json
│ └── ...
│
├── frontend/
│ └── netflix-clone/
│ ├── public/
│ │ ├── logo.png
│ │ └── vite.svg
│ │
│ ├── src/
│ │ ├── assets/
│ │ ├── images/
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── SignUp.jsx
│ │ │ └── Dashboard.jsx
│ │ ├── Screenshots/
│ │ │ ├── Homepage_lg.png
│ │ │ ├── dashboard_lg.png
│ │ │ ├── SignIn_UserExist_sm.png
│ │ │ ├── SignInUserNotfoundErr_sm.png
│ │ │ ├── Signup_md.png
│ │ │ └── Signup_Useralreadyexist_lg.png
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx
│ │
│ ├── index.html
│ ├── tailwind.config.js
│ ├── vite.config.js
│ └── vercel.json
│
└── README.md

## 📸 Screenshots

### 🏠 Homepage (Login Page)
![Homepage](src/Screenshots/Homepage_lg.png)

### ✅ Dashboard
![Dashboard](src/Screenshots/dashboard_lg.png)

### ❌ Sign In - User Doesn’t Exist
![Not Found](src/Screenshots/SignInUserNotfoundErr_sm.png)

### ⚠️ Sign In - User Already Exists
![User Exists](src/Screenshots/SignIn_UserExist_sm.png)

### 📝 Sign Up
![Signup](src/Screenshots/Signup_md.png)

### 🔁 Sign Up - User Already Exists
![Signup Exists](src/Screenshots/Signup_Useralreadyexist_lg.png)


## ⚙️ How It Works

1️⃣ User visits the app and lands on the **Login Page**  
2️⃣ If user doesn’t have an account, they can **Sign Up**  
3️⃣ The app performs **frontend validation** (empty fields, format check)  
4️⃣ On valid input, data is sent via **Axios** to the backend  
5️⃣ Backend checks if the user exists in **memory-based storage**
   - If yes, allows **Sign In**
   - If no, shows error (or creates user during Sign Up)
6️⃣ On success, user is **navigated to the dashboard**  
7️⃣ All routes are handled smoothly using **React Router DOM**


## 🧪 Test Cases

- ✅ **New User Signup** → Redirects to Dashboard  
- ⚠️ **User Already Exists** (Signup) → Error shown  
- ❌ **Wrong Credentials** (Sign In) → Not Found Error  
- ✅ **Correct Login** → Dashboard  
- 🔃 **Refresh Page** → Routes preserved

## 🌐 Deployment

### 🔗 Live URLs

- **Frontend (Vercel)**: [https://netflixclone-orcin-nine.vercel.app](https://netflixclone-orcin-nine.vercel.app)  
- **Backend (Render)**: [https://netflix-clone-1p4s.onrender.com](https://netflix-clone-1p4s.onrender.com)


## 🖥️ Local Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KarthigaP20/Netflix-Clone.git
cd Netflix-Clone

## 🙋‍♀️ Author

Developed with ❤️ by [Karthiga P](https://github.com/KarthigaP20)

## 💡 Feedback & Contributions

If you like this project, feel free to ⭐ the repo, fork it, or submit a pull request!

Have suggestions or issues? Open a ticket in the [Issues](https://github.com/KarthigaP20/Netflix-Clone/issues) section.

Made with ❤️ using **React**, **Tailwind CSS**, **Node.js**, **Vite**, and **Express**.

