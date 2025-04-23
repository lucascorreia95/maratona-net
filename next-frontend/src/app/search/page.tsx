import { SearchModule } from "@/modules/Search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const query = (await searchParams).query;

  return (
    <div className="flex flex-col justify-start w-full max-w-full">
      <SearchModule query={query} />
    </div>
  );
}
