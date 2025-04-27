import { detailsAction } from "@/actions";
import {
  normalizeMovieDetailsData,
  normalizeTVDetailsData,
} from "@/helpers/normalizeDetailsData";
import DetailModule from "@/modules/Detail";
import { MovieDetailsResponse } from "@/types/movie-deital-types";
import { ShowType } from "@/types/show-types";
import { TVDetailsResponse } from "@/types/tv-detail-types";

export interface DetailPageProps {
  params: {
    type: ShowType;
    id: string;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const type = (await params).type;
  const id = (await params).id;
  const initialData = await detailsAction(type, id);
  let normalizedData = null;

  if (!initialData.error) {
    if (type === ShowType.MOVIE) {
      normalizedData = normalizeMovieDetailsData(
        initialData.data as MovieDetailsResponse
      );
    } else {
      normalizedData = normalizeTVDetailsData(
        initialData.data as TVDetailsResponse
      );
    }
  }

  return (
    <div className="flex flex-col justify-start w-full max-w-full">
      <DetailModule
        initialData={normalizedData}
        error={initialData.error}
        type={type}
      />
    </div>
  );
}
