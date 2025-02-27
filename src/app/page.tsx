import { Background } from "@/components/background";

import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
