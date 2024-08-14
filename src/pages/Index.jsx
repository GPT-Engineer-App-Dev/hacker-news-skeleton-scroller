import React from "react";
import HackerNewsList from "../components/HackerNewsList";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Hacker News Top Stories</h1>
        <HackerNewsList />
      </div>
    </div>
  );
};

export default Index;