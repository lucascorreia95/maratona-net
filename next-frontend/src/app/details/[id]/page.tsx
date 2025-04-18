"use client";
import DetailModule from "@/modules/Detail";
import { useParams } from "next/navigation";

export default function DetailPage() {
  const params = useParams<{ id: string }>();

  return (
    <div className="flex flex-col justify-start p-9 w-full max-w-full">
      <DetailModule id={params.id} />
    </div>
  );
}
