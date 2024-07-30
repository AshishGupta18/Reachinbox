import React, { useState, useEffect } from "react";
import ThreadDetails from "./ThreadDetails";
import CustomEditor from "./CustomEditor";
import { FaSun, FaMoon, FaHome, FaUser, FaEnvelope, FaPaperPlane, FaTasks, FaChartBar } from "react-icons/fa";

function Dashboard() {
  const [showEditor, setShowEditor] = useState(false);
  const [mailList, setMailList] = useState([]);
  const [activeMenu, setActiveMenu] = useState("");
  const [selectedThreadId, setSelectedThreadId] = useState(null);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchMailList = async () => {
    const token = localStorage.getItem("jwt");
    console.log("Fetching mail list with token:", token); // Debugging

    try {
      const response = await fetch(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response status:", response.status); // Debugging
      console.log("Response status text:", response.statusText); // Debugging

      if (!response.ok) {
        const errorText = await response.text(); // Get detailed error text
        throw new Error(
          `Network response was not ok: ${response.statusText} - ${errorText}`
        );
      }

      const data = await response.json();
      console.log("Fetched data:", data); // Debugging

      setMailList(data);
      setActiveMenu("mail");
    } catch (error) {
      setError(error.message);
      console.error("Error fetching mail list:", error);
    }
  };

  useEffect(() => {
    if (activeMenu === "mail") {
      fetchMailList();
    }
  }, [activeMenu]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleThreadClick = (threadId) => {
    setSelectedThreadId(threadId);
  };

  const handleDeleteThread = (threadId) => {
    setMailList((prevList) =>
      prevList.filter((thread) => thread.id !== threadId)
    );
    setSelectedThreadId(null);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen w-full bg-gray-100 dark:bg-gray-900 flex`}>
      <aside className="w-64 bg-gray-200 dark:bg-gray-800 flex flex-col items-center py-4">
        <div className="text-black dark:text-white text-xl font-bold mb-6">Onebox</div>
        <nav className="flex flex-col w-full">
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => setShowEditor(true)}
          >
            <FaHome className="mr-2" />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => handleMenuClick("profile")}
          >
            <FaUser className="mr-2" />
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => handleMenuClick("mail")}
          >
            <FaEnvelope className="mr-2" />
            <span>Mail</span>
          </a>
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => handleMenuClick("send")}
          >
            <FaPaperPlane className="mr-2" />
            <span>Send</span>
          </a>
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => handleMenuClick("tasks")}
          >
            <FaTasks className="mr-2" />
            <span>Tasks</span>
          </a>
          <a
            href="#"
            className="text-black dark:text-white py-2 px-4 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={() => handleMenuClick("reports")}
          >
            <FaChartBar className="mr-2" />
            <span>Reports</span>
          </a>
        </nav>
        <div className="mt-auto mb-4 text-black dark:text-white">AS</div>
      </aside>
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
      <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Onebox</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-400">Tim's Workspace</span>
            <div className="flex items-center space-x-2">
              {isDarkMode ? (
                <FaSun className="text-yellow-500 cursor-pointer" onClick={() => setIsDarkMode(false)} />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-400 cursor-pointer" onClick={() => setIsDarkMode(true)} />
              )}
            </div>
          </div>
        </header>
        {showEditor ? (
          <CustomEditor/>
        ) : (
          <section className="flex flex-col items-center justify-center h-full">
            {activeMenu === "mail" ? (
              <div className="w-full">
                {error ? (
                  <div className="text-center text-red-500">{error}</div>
                ) : selectedThreadId ? (
                  <ThreadDetails
                    threadId={selectedThreadId}
                    onDelete={handleDeleteThread}
                  />
                ) : (
                  <ul className="w-full">
                    {mailList.map((mail) => (
                      <li
                        key={mail.id}
                        className="py-2 px-4 border-b border-gray-700"
                        onClick={() => handleThreadClick(mail.id)}
                      >
                        <span className="text-white">{mail.subject}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <img
                 src="../public/vite.svg"
                  alt="Inbox"
                  className="w-48 h-48 mb-14"
                />
                <h2 className="text-xl font-bold">
                  It's the beginning of a legendary sales pipeline
                </h2>
                <p className="text-gray-400">
                  When you have inbound E-mails you'll see them here
                </p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
