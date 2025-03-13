import React, { useState, useRef } from 'react';
import Avatar from "../image/Avatar.svg";
import Navbar from './Navbar';
import { Image, Paperclip, Smile } from 'lucide-react';

const Messages = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [message, setMessage] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const messages = [
        {
            id: 1,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 5, 2025 12:00 PM',
        },
        {
            id: 2,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: true,
            timestamp: 'Feb 5, 2025 11:00 AM',
        },
        {
            id: 3,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 4, 2025 01:00 PM',
        },
        {
            id: 4,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Feb 3, 2025 10:00 AM',
        },
        {
            id: 5,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Feb 2, 2025 03:00 PM',
        },
        {
            id: 6,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Feb 1, 2025 05:00 PM',
        },
        {
            id: 7,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: true,
            online: true,
            timestamp: 'Jan 31, 2025 08:00 AM',
        },
        {
            id: 8,
            name: 'Hamish March',
            title: 'HR Manager · Grameenphone',
            message: 'You: Thank you very much for your support...',
            avatar: Avatar,
            pinned: false,
            online: false,
            timestamp: 'Jan 30, 2025 11:00 AM',
        },
    ];

    // Mock chat messages
    const chatMessages = [
        {
            id: 1,
            sender: 'other',
            message: 'Keeping this in mind, Grameenphone always brings future-proof technology in order to facilitate your progress.',
            timestamp: 'May 21, 2020, 7:51 PM',
        },
        {
            id: 2,
            sender: 'me',
            message: 'My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users.',
            timestamp: 'May 21, 2020, 7:51 PM',
        },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const fileInputRef = useRef(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            // Handle file upload logic here
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
      <>
      <Navbar/>
      <div className="flex h-[845px] bg-gray-50">
        <div className="w-full flex flex-col md:flex-row rounded-lg shadow-md">
        {/* Sidebar Toggle Button (Mobile) */}
        {/* <button
          className="md:hidden me-auto fixed top-14 left-4 z-50 bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button> */}

        {/* Left Sidebar */}
        <div
          className={`w-full md:w-80 bg-white border-r border-t border-gray-200 flex flex-col ${
            isSidebarOpen ? "block" : "hidden"
          } md:block`}
        >
        {/* Navigation Tabs */}
      <div className="flex items-center px-3 py-5 border-b border-gray-200">
        <span className="text-sm font-medium mr-4">Messages</span>
        <span className="text-sm font-medium bg-blue-100 text-blue-600 px-4 py-1 ms-16  rounded-full mr-4">Focused</span>
        <span className="text-sm font-medium text-gray-500">Others</span>
      </div>

          {/* Search Box */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="search by name"
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md bg-gray-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <button className="absolute right-2 top-2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto border-t border-gray-200">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-none"
              >
                <div className="relative">
                  <img src={msg.avatar || "/placeholder.svg"} alt={msg.name} className="w-10 h-10 rounded-full" />
                  {msg.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-900">{msg.name}</p>
                    {msg.pinned && <span className="h-2 w-2 bg-pink-500 rounded-full"></span>}
                  </div>
                  <p className="text-xs text-gray-500">{msg.title}</p>
                  <p className="text-xs text-gray-500 truncate">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center p-4 ">
            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 rounded-md border border-gray-300 bg-white text-sm text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              {[...Array(5)].map((_, i) => {
                const pageNumber = i + 1
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-2 py-1 rounded-md text-sm ${
                      currentPage === pageNumber
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-500 border border-gray-300"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              })}
              <span className="text-gray-500 mx-1">...</span>
              <button
                onClick={() => handlePageChange(89)}
                className={`px-2 py-1 rounded-md text-sm ${
                  currentPage === 89 ? "bg-blue-500 text-white" : "bg-white text-gray-500 border border-gray-300"
                }`}
              >
                89
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === 89}
                className="px-2 py-1 rounded-md border border-gray-300 bg-white text-sm text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-white border-t  border-gray-200">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <img src={Avatar} alt="Hamish March" className="w-8 h-8 rounded-full" />
                            <div className="ml-3">
                                <h2 className="text-sm font-medium">Hamish March</h2>
                                <p className="text-xs text-gray-500">HR Manager · Grameenphone</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-blue-600 text-sm font-medium hidden md:block">View Profile</button>
                            <button className="text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Chat Messages */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-4">
                            {chatMessages.map((chatMessage) => (
                                <div
                                    key={chatMessage.id}
                                    className={`flex items-start space-x-3 ${chatMessage.sender === 'me' ? 'justify-end' : ''
                                        }`}
                                >
                                    {chatMessage.sender === 'other' && (
                                        <img src={Avatar} alt="Other Avatar" className="w-8 h-8 rounded-full" />
                                    )}
                                    <div>
                                        <div className="bg-blue-50 rounded-xl px-3 py-2">
                                            <p className="text-sm text-gray-700">{chatMessage.message}</p>
                                        </div>
                                        <p
                                            className={`text-xs text-gray-400 mt-1 ${chatMessage.sender === 'me' ? 'text-right' : ''
                                                }`}
                                        >
                                            {chatMessage.timestamp}
                                        </p>
                                    </div>
                                    {chatMessage.sender === 'me' && (
                                        <img src={Avatar} alt="My Avatar" className="w-8 h-8 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Message Input */}
                    <div className="border-t border-gray-200 px-6 py-4">
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Write a message"
          className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input type="file" id="fileInput" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
            <button onClick={triggerFileInput} className="text-gray-500 hover:text-gray-600 transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-600 transition-colors">
              <Smile className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-600 transition-colors">
              <Image className="h-5 w-5" />
            </button>
          </div>
          <span className="text-xs text-gray-400">Press Enter to Send</span>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Messages;
