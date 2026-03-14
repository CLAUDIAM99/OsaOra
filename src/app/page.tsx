import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeFlow from "@/components/HomeFlow";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden aurora-bg">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HomeFlow />
          </main>
        <Footer />
      </div>
    </div>
  );
}
