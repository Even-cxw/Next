"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { Suspense, useEffect } from "react";
import Loading from "@/app/dashboard/loading";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";
import { ReduxProvider } from "@/store";

export default function RootLayout({ children, auth, modal }) {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("nextToken");
    if (!token) {
      router.push("/login", { scroll: false });
    }
  });
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Suspense fallback={<Loading />}>
            <StyledComponentsRegistry>
              {children}
              {/* {auth} */}
              {/* {modal} */}
            </StyledComponentsRegistry>
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
