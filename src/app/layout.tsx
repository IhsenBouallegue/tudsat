import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const StarrySkyCanvas = dynamic(
  () => import("@/components/starry-sky-canvas"),
  {
    ssr: false,
  },
);

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUDSaT",
  description: "TUDSaT is a student association at TU Darmstadt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body className={cn(plusJakartaSans.className, "bg-background")}>
          <StarrySkyCanvas />
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
