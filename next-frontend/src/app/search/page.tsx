import { searchAction } from "@/actions/search";
import { normalizeSearch } from "@/helpers/normalizeSearch";
import { SearchModule } from "@/modules/Search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let initialData,
    normalizedData = null;
  const query = (await searchParams).query;

  if (query) {
    initialData = await searchAction(query!);
  }

  if (initialData && initialData?.data) {
    normalizedData = normalizeSearch(initialData.data!);
  }

  return (
    <div className="flex flex-col justify-start w-full max-w-full">
      <SearchModule
        initialData={normalizedData}
        error={initialData ? initialData.error : true}
      />
    </div>
  );
}
