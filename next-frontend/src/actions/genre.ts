"use server";

import { GenreResponse } from "@/types/genre-types";

const genreAction = async (path: string) => {
  "use server";

  const response = await fetch(
    `${process.env.BASE_API_URL}/genre/${path}/list?language=pt-BR`,
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

  const data: GenreResponse = await response.json();

  return {
    error: false,
    status: response.status,
    message: null,
    data,
  };
};

export { genreAction };
