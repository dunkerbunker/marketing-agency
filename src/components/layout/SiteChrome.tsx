import type { ReactNode } from "react";
import CursorGlow from "../effects/CursorGlow";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink text-offwhite">
      <CursorGlow />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
