import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'tailwindcss/tailwind.css';

function CustomEditor() {
  const [editorState, setEditorState] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const { thread_id } = useParams();

  const handleSend = async () => {
    const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        body: editorState,
      }),
    });

    if (response.ok) {
      alert('Reply sent successfully!');
    } else {
      alert('Failed to send reply.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="to">To</label>
          <input
            id="to"
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="from">From</label>
          <input
            id="from"
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <ReactQuill value={editorState} onChange={setEditorState} />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Variables
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Preview Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomEditor;
