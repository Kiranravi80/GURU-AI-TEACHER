// File: frontend/components/VideoPlayer.js
export default function VideoPlayer({ videoUrl }) {
    if (!videoUrl) {
      return (
        <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center rounded border dark:border-gray-700">
          <span className="text-gray-400 text-sm">No video generated yet</span>
        </div>
      );
    }
  
    return (
      <div className="w-full aspect-video rounded overflow-hidden border dark:border-gray-700">
        <iframe
          src={videoUrl}
          title="AI Explanation Video"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    );
  }
  