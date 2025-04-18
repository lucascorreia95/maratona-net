"use server";

import { GenreResponse } from "@/types/genre-types";
import { ShowType } from "@/types/show-types";

const genreAction = async (type: ShowType) => {
  "use server";

  const response = await fetch(
    `${process.env.BASE_API_URL}/genre/${type}/list?language=pt-BR`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
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
