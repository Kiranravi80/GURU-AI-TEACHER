import Head from 'next/head';
import Navbar from '../components/Navbar';
import Chatbot from '../components/Chatbot'; // ✅ Import chatbot

export default function History() {
  const mockHistory = [
    {
      id: 1,
      fileName: 'Physics_Laws_of_Motion.pdf',
      summary: 'Newton’s laws describe motion and interaction of bodies under force...',
      date: '2025-07-13',
    },
    {
      id: 2,
      fileName: 'Machine_Learning_Intro.pptx',
      summary: 'ML involves training models using data. Supervised, unsupervised...',
      date: '2025-07-12',
    },
  ];

  return (
    <>
      <Head>
        <title>History - GURU</title>
      </Head>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-100 dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-100 px-4">
        <main className="max-w-4xl mx-auto py-10">
          <h2 className="text-xl font-semibold mb-6">Your Past Sessions</h2>

          {mockHistory.length > 0 ? (
            <div className="space-y-4">
              {mockHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded dark:bg-gray-800 dark:border-gray-700 shadow-sm"
                >
                  <h3 className="text-lg font-medium">{item.fileName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{item.summary}</p>
                  <div className="mt-2 text-xs text-gray-400">Processed on {item.date}</div>
                  <button
                    onClick={() => alert('Preview or download coming soon')}
                    className="mt-2 text-sm text-green-600 hover:underline"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No sessions found.</p>
          )}
        </main>

        {/* ✅ Floating Chat Assistant */}
        <Chatbot />
      </div>
    </>
  );
}
