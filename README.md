# 🛒 CartX Frontend

Welcome to **CartX** – a modern, responsive web app to manage and showcase your item collection with ease!



---

## 🚀 Features

- **Add Items:** Upload items with cover & additional images, type, and description.
- **View Items:** Browse your collection in a beautiful, responsive grid.
- **Item Details:** See item details with an image carousel and description.
- **Enquire:** Instantly send an enquiry (toast notification).
- **Modern UI:** Built with React, Tailwind CSS, and React Router.
- **Image Uploads:** Integrated with Cloudinary for image hosting.
- **Notifications:** Toast notifications for feedback and actions.

---

## 🖥️ Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
- [Cloudinary](https://cloudinary.com/) (for image uploads)
- [Vite](https://vitejs.dev/) (for fast development)

---

## 📦 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/cartx-frontend.git
cd cartx-frontend
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Set up environment variables**

Create a `.env` file in the root directory and add your backend API URL:

```
VITE_API_BASE_URL=https://your-backend-url.com
```

> **Note:** The default is set to `http://localhost:5000` if not provided.

### 4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

---



---

## ☁️ Image Uploads

- Images are uploaded to [Cloudinary](https://cloudinary.com/) using a preset.
- You can configure your own Cloudinary account and update the upload URL and preset in [`AddItemsPage.jsx`](src/Components/AddItemsPage.jsx).

---

## 📁 Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  Components/
    LandingPage.jsx
    AddItemsPage.jsx
    ViewItemsPage.jsx
    ViewItemDetails.jsx
    ItemCard.jsx
  services/
    api.js
public/
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Inspiration

CartX was built as a modern solution for managing and showcasing collections, with a focus on simplicity, speed, and beautiful UI.

---

Made with ❤️ using React
