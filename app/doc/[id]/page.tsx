"use client";

import Document from "@/components/Document";

import { use } from "react";

function DocumentPage({
  params: paramsPromise,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const params = use(paramsPromise);
  const { id } = params;

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;
