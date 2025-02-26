import { Background } from "@/components/background";

import { Content } from "./components/content";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Background />
      <Header />
      <Content />
    </main>
  );
}
