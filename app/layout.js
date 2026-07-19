import { JetBrains_Mono, Inter } from "next/font/google";
import ThemeBackground from "./components/ThemeBackground";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Hussein Khamis, Full-Stack Developer",
  description: "Hussein Khamis, Full-Stack Developer. Projects, skills, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${inter.variable} antialiased bg-bg text-text`}>
        <ThemeBackground />
        {children}
      </body>
    </html>
  );
}
