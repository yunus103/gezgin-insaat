"use client";

import { usePathname } from "next/navigation";

export function HeaderSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  
  // Header height is h-20 (5rem)
  return <div className="h-20 w-full" />;
}
