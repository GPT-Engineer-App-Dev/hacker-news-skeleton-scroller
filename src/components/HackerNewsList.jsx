import React, { useState } from "react";
import useHackerNews from "../hooks/useHackerNews";
import StoryCard from "./StoryCard";
import { Skeleton } from "@/components/ui/skeleton";

const HackerNewsList = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useHackerNews(query);

  return (
    <div>
      <input
        type="text"
        placeholder="Search stories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} className="h-24 w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((story) => (
            <StoryCard key={story.objectID} story={story} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HackerNewsList;