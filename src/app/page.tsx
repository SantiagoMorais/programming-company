import { Background } from "@/components/background";
import { WhatsAppButton } from "@/components/whatsapp-button";

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
      <WhatsAppButton />
    </main>
  );
}
