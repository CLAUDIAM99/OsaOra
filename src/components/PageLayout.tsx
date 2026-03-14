import BackgroundGlow from "./BackgroundGlow";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden aurora-bg">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
