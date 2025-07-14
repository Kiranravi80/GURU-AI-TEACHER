import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot';
import FileUploader from '../components/FileUploader';
import VideoPlayer from '../components/VideoPlayer'; // ✅ Import VideoPlayer

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [aiOutput, setAiOutput] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleProcess = async () => {
    if (!file) {
      alert('Please upload a file.');
      return;
    }

    // TODO: Replace with real backend response
    setAiOutput('✅ This is a sample AI explanation after processing your uploaded file.');
    setVideoUrl('https://www.youtube.com/embed/dQw4w9WgXcQ'); // 🎬 Sample link (replace later)
  };

  return (
    <>
      <Head>
        <title>Dashboard - GURU</title>
      </Head>

      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-100 px-4">
        <main className="max-w-4xl mx-auto py-10">
          <h2 className="text-xl font-semibold mb-6">Upload Learning Material</h2>

          <FileUploader onFileSelect={(file) => setFile(file)} />

          <button
            onClick={handleProcess}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Process File
          </button>

          {/* AI Explanation */}
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-2">AI Explanation</h3>
            <textarea
              value={aiOutput}
              readOnly
              rows={10}
              className="w-full border rounded p-3 dark:bg-gray-800"
            />
          </div>

          {/* ✅ AI Video Preview */}
          <div className="mt-10">
            <h3 className="text-lg font-medium mb-2">AI Generated Video</h3>
            <VideoPlayer videoUrl={videoUrl} />
          </div>
        </main>

        <Chatbot />
      </div>
    </>
  );
}
