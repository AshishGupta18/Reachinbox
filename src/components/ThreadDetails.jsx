import React, { useState, useEffect } from 'react';

function ThreadDetails({ threadId, onDelete }) {
  const [thread, setThread] = useState(null);
  const [error, setError] = useState(null);

  const fetchThreadDetails = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setThread(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching thread details:', error);
    }
  };

  const deleteThread = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/${threadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      onDelete(threadId);
    } catch (error) {
      setError(error.message);
      console.error('Error deleting thread:', error);
    }
  };

  useEffect(() => {
    fetchThreadDetails();
  }, [threadId]);

  return (
    <div>
      {error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : thread ? (
        <div className="p-4 border border-gray-700 rounded">
          <h2 className="text-xl font-bold mb-4">{thread.subject}</h2>
          <p className="text-gray-400 mb-4">{thread.body}</p>
          <button
            onClick={deleteThread}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Thread
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ThreadDetails;
