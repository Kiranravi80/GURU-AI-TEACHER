
# GURU – Guided Understanding & Research Utility 🤖📚

GURU is an AI-powered educational assistant that helps users deeply understand content by processing and explaining input materials like PDFs, Word documents, PowerPoint presentations, YouTube videos, and plain text.

> ✨ “GURU – Learn With Me” ✨

---

## 🌐 Live Demo

🚀 Coming Soon – Deploy on **Vercel (Frontend)** and **Render/Heroku (Backend)**

---

## 🧠 Features

- 📥 Upload PDFs, Docs, PPTs, YouTube links, and text
- 🧠 AI Explanation using OpenAI or Gemini
- 🔊 Convert explanations to audio using TTS
- 🎞️ Generate videos with voice + images
- 🖼️ AI image generation in multiple styles
- 📝 Download summarized PDF notes
- 💬 Floating Chatbot for instant Q&A
- 👤 Login with Google + user session history
- 🌓 Clean modern UI with dark/light mode
- 📱 Fully responsive (mobile + desktop)

---

## 🖼️ UI Snapshots

- Sign In / Sign Up page (Google Auth)
- Dashboard with file upload and results
- ChatGPT-style layout with chatbot
- History tracking panel
- Light/Dark mode support

---

## 🛠️ Tech Stack

### Frontend (Next.js + Tailwind CSS)
- React 18 / Next.js 14
- Tailwind CSS + Heroicons
- Google OAuth
- Axios

### Backend (Node.js + Express)
- Express.js API
- MongoDB with Mongoose
- OpenAI SDK / Gemini API
- Multer (file uploads)
- fluent-ffmpeg (video/audio processing)
- jsonwebtoken for auth

---

## 🗂️ Folder Structure

```
guru/
├── frontend/        # Next.js frontend (UI)
│   └── pages/
│   └── components/
├── backend/         # Node.js backend (APIs)
│   └── controllers/
│   └── routes/
│   └── utils/
│   └── models/
│   └── middleware/
│   └── config/
└── shared/          # Shared files and assets
```

---

## 🔐 .env Configuration (Backend)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/guru
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/guru-ai-assistant.git
cd guru
```

### 2. Install Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Install Backend

```bash
cd ../backend
npm install
npm run dev
```

---

## 📌 Requirements

- Node.js ≥ 18.x
- MongoDB (local or Atlas)
- ffmpeg installed and added to PATH
- OpenAI / Gemini API key

---

## 🚀 Deployment

- Frontend: [Vercel](https://vercel.com/)
- Backend: [Render](https://render.com/) or [Heroku](https://heroku.com/)
- MongoDB: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📚 Future Enhancements

- In-app note-taking
- Collaborative learning sessions
- Multilingual explanation + translation
- Quizzes + flashcards from input
- Subscription/credits system for monetization

---

## 🤝 Contributing

Pull requests are welcome! Open an issue to discuss what you’d like to change.

---

## 📄 License

MIT License

---

## 🧑‍💻 Author

**Kiran Ravi**  
Made with ❤️ using OpenAI & Next.js  
