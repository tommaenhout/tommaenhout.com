"use client";

import { useState } from "react";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setIsLoading(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-[9999] bg-sunsetOrange h-12 w-12 md:h-16 md:w-16 flex justify-center items-center hover:bg-opacity-90 text-black rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group animate-pulse"
          aria-label="Open AI Chat"
        >
          <div className="relative">
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with AI Assistant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-0 md:bottom-6 md:right-6 z-[9999] h-full w-full  md:w-[450px] md:h-[585px] bg-black rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="relative">
          <div className="bg-rainyGray text-white p-4">
            <div className="flex h-fit gap-3">
              <div className="h-2 w-2 bg-green-400 rounded-full relative animate-pulse top-2"></div>
              <h3 className="text-lg leading-tight">AI Assistant</h3>
            </div>
       
            <div
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 absolute top-4 right-4 cursor-pointer rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            </div>
          </div>

          {/* Iframe Container */}
          <div className="flex-1 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-sunsetOrange border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-600 font-medium">Loading AI Assistant...</p>
                </div>
              </div>
            )}
            <iframe
              src="https://timaenho-career-conversation.hf.space"
              className="w-full h-full border-0"
              title="AI Career Assistant"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
