"use client";

import { db } from "@/firebase";
import { doc } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDocumentData } from "react-firebase-hooks/firestore";

function SidebarOption({ id, href }: { id: string; href: string }) {
  const [data] = useDocumentData(doc(db, "documents", id));

  const pathName = usePathname();
  const isActive = href.includes(pathName) && pathName !== "/";

  if (!data) return null;

  return (
    <Link
      href={href}
      className={`relative p-3 rounded-lg text-center flex items-center justify-center shadow-md transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold scale-105"
          : "bg-white text-gray-600 border border-gray-300 hover:shadow-lg hover:bg-gray-100"
      }`}
    >
      <p className="truncate">{data.title}</p>
    </Link>
  );
}

export default SidebarOption;
