import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { Suspense } from "react";
import Loading from "@/app/dashboard/loading";
const inter = Inter({ subsets: ["latin"] });
import { ReduxProvider } from "@/store";
import UseChekLogin from "@/hooks/useCheckLogin";

export default function RootLayout({ children, auth, modal }) {
  {/*  Works, since Carousel is a Client Component */}
  return (
    <html lang="en">
      <body>
        <UseChekLogin></UseChekLogin>
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
