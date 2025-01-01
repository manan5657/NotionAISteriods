"use client";

import { useTransition } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createNewDocument } from "@/actions/actions";

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
      //* Create New Document
      const { docId } = await createNewDocument();
      router.push(`/doc/${docId}`);
    });
  };

  return (
    <>
      <Button
        onClick={handleCreateNewDocument}
        disabled={isPending}
        className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg bg-slate-900 
        before:absolute before:inset-0 before:rounded-lg before:border-2 
        before:border-transparent before:transition-all before:duration-300
        hover:before:border-gradient-animate hover:scale-105 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        transition-all duration-300"
      >
        <style jsx>{`
          @keyframes borderAnimation {
            0% {
              border-image: linear-gradient(
                  to right,
                  #ff0000,
                  #ff00ff,
                  #0000ff,
                  #00ffff,
                  #ff0000
                )
                1;
            }
            20% {
              border-image: linear-gradient(
                  to right,
                  #ff00ff,
                  #0000ff,
                  #00ffff,
                  #ff0000,
                  #ff00ff
                )
                1;
            }
            40% {
              border-image: linear-gradient(
                  to right,
                  #0000ff,
                  #00ffff,
                  #ff0000,
                  #ff00ff,
                  #0000ff
                )
                1;
            }
            60% {
              border-image: linear-gradient(
                  to right,
                  #00ffff,
                  #ff0000,
                  #ff00ff,
                  #0000ff,
                  #00ffff
                )
                1;
            }
            80% {
              border-image: linear-gradient(
                  to right,
                  #ff0000,
                  #ff00ff,
                  #0000ff,
                  #00ffff,
                  #ff0000
                )
                1;
            }
            100% {
              border-image: linear-gradient(
                  to right,
                  #ff00ff,
                  #0000ff,
                  #00ffff,
                  #ff0000,
                  #ff00ff
                )
                1;
            }
          }

          .hover\\:before\\:border-gradient-animate:hover::before {
            animation: borderAnimation 3s linear infinite;
            border-image: linear-gradient(
                to right,
                #ff0000,
                #ff00ff,
                #0000ff,
                #00ffff,
                #ff0000
              )
              1;
          }
        `}</style>

        {isPending ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Creating...
          </span>
        ) : (
          "New Document"
        )}
      </Button>
    </>
  );
}

export default NewDocumentButton;
