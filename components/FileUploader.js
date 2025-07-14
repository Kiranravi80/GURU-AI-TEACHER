import { useState } from 'react';

export default function FileUploader({ onFileSelect }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded p-6 text-center cursor-pointer transition-all
        ${dragActive ? 'border-green-500 bg-green-50 dark:bg-gray-800' : 'border-gray-300 dark:border-gray-600'}
      `}
    >
      <input
        type="file"
        accept=".pdf,.docx,.pptx,.txt"
        onChange={handleChange}
        className="hidden"
        id="fileUpload"
      />
      <label htmlFor="fileUpload" className="block text-sm text-gray-600 dark:text-gray-300">
        {fileName ? `📄 ${fileName}` : 'Drag & drop a file here or click to browse'}
      </label>
    </div>
  );
}
