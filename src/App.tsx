import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />
      <div className="video-vignette" aria-hidden="true" />
      <Navbar />
      <Hero />
    </main>
  );
}
