import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
      <p className="text-gray-600 mb-2">Upvotes: {story.points}</p>
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default StoryCard;