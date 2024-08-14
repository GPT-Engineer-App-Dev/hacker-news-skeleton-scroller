import { useQuery } from "@tanstack/react-query";

const fetchHackerNews = async (query) => {
  const response = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`
  );
  const data = await response.json();
  return data.hits;
};

const useHackerNews = (query) => {
  return useQuery({
    queryKey: ["hackerNews", query],
    queryFn: () => fetchHackerNews(query),
  });
};

export default useHackerNews;