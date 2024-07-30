// src/components/CustomEditor.jsx
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
    <div className="min-h-screen bg-gray-800 text-white p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="to">To</label>
          <input
            id="to"
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="from">From</label>
          <input
            id="from"
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Body</label>
          <div className="border border-gray-700 rounded">
            <ReactQuill
              value={editorState}
              onChange={setEditorState}
              className="bg-gray-800 text-white rounded"
              theme="snow"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Variables
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomEditor;
