"use server";
import { MovieDetailsResponse } from "@/types/movie-deital-types";
import { ShowType } from "@/types/show-types";
import { TVDetailsResponse } from "@/types/tv-detail-types";

const detailsAction = async (type: ShowType, id: string) => {
  "use server";

  const response = await fetch(
    `${process.env.BASE_API_URL}/${type}/${id}?append_to_response=credits&language=pt-BR`,
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

  const data: MovieDetailsResponse | TVDetailsResponse = await response.json();

  return {
    error: false,
    status: response.status,
    message: null,
    data,
  };
};

export { detailsAction };
