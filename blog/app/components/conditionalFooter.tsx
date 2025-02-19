// components/ConditionalFooter.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  
  const isProjectPost = pathname.startsWith("/projects/") && pathname !== "/projects";

  if (isProjectPost) {
    // Hide footer on project post pages
    return null;
  }

  // Otherwise, show the footer
  return <Footer />;
}