# React Project -EmployWise Assignment

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-4-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue)

This project is a test assignment for assessment, featuring a login system and a user list with update and delete functionalities.

## 🚀 Features
- **Login Page** with authentication (using LocalStorage for storing auth token)
- **User List Page** displaying all users
- **Update User Details** popup with conditional rendering
- **Delete User Functionality** with confirmation
- **React Toastify** for displaying success and error messages
- **React Spinner** for showing loaders
- **Custom Hook** for fetching data efficiently
- **Context API** for managing global data fetching
- **Pagination** for user list navigation
- **Formik & Yup** for form validation
- **Dynamic Search Bar** for filtering users
- **Protected Routes** using React Router
- **Axios** for API calls
- **Environment Variables (.env)** for storing sensitive configurations

## 🖥️ Working of the Project
1. **Login Page**:
   - User enters credentials.
   - Token is stored in LocalStorage upon successful authentication.
   - Redirects to the user list page if logged in.
   
2. **User List Page**:
   - Fetches user data using a **custom hook** and **Context API**.
   - Displays a **list of users** with pagination.
   - Provides a **search bar** for dynamic filtering.
   - Clicking on a user allows updating details via a **popup form**.
   - Users can be deleted with a confirmation step.

## 📦 Installation
Follow these steps to set up the project locally:

```sh
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Navigate to the project folder
cd your-project

# Install dependencies
npm install

# Start the development server
npm run dev
```

## ⚙️ Environment Variables
Create a `.env` file in the root and add:

```env
VITE_BASE_URL=https://reqres.in/
```

## 🛠️ Built With
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [React Spinner](https://www.npmjs.com/package/react-spinners)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🤝 Contributing
Feel free to contribute! Fork, create a branch, and submit a PR.

## 📜 License
This project is licensed under the MIT License.

---
### 💡 **Need Help?**  
📧 Email: [himanshunishad620@gmail.com](mailto:himanshunishad620@gmail.com)

