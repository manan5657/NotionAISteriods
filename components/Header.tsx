"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  //! Custom hook from clerk ->
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-8 py-5">
      {user && (
        <Link href={"/"}>
          <h1 className="text-2xl">
            {user?.firstName}
            {`'s`} Space
          </h1>
        </Link>
      )}

      {/* BreadCrumbs */}
      <Breadcrumbs />

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
