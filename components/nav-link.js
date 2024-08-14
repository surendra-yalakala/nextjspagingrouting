"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children } from "react";

export default function NavLink({ href, title, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={pathName.startsWith(href) ? "active" : undefined}
    >
      {children}
    </Link>
  );
}
