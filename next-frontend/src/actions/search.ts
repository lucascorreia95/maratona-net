"use server";
import { SearchResponse } from "@/types/search-types";

const searchAction = async (query: string) => {
  "use server";

  const response = await fetch(
    `${process.env.BASE_API_URL}/search/multi?language=pt-BR&query=${query}`,
    {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return {
      error: true,
      status: response.status,
      message: "Failed to fetch data",
      data: null,
    };
  }

  const data: SearchResponse = await response.json();

  return {
    error: false,
    status: response.status,
    message: null,
    data,
  };
};

export { searchAction };
