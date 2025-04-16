"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated" && pathname !== "/admin/login") {
    router.push("/admin/login");
    return null;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return <AdminLayout>{children}</AdminLayout>;
} 