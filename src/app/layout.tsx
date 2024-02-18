import "./globals.css";
import type { Metadata } from "next";
import ConvexClientProvider from "./ConvexClientProvider";
import { dark, neobrutalism } from '@clerk/themes';
import { Lexend } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import NavHeader from "@/components/NavHeader";


const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "TextRPG.Ai",
  description: "A Text based RPG Game Powered By AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(lexend.className, 'antialiased min-h-screen border-none outline-none', 'scrollbar scrollbar-thumb scrollbar-thumb-white scrollbar-track-slate-700 bg-gradient-to-tl from-violet-400 to-violet-300 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-900 dark:to-black')} suppressHydrationWarning={true}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ConvexClientProvider>
        <NavHeader/>
          {children}
        </ConvexClientProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}