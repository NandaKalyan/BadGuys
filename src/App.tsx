import BackgroundVideo from "./components/BackgroundVideo";
import Hero from "./components/Hero";

export default function App() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <BackgroundVideo />
      <div className="video-vignette" aria-hidden="true" />
      <Hero />
    </main>
  );
}
