import { Background } from "@/components/background";
import { WhatsAppAndScrollButtons } from "@/components/whatsapp-and-scroll-buttons";

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
      <WhatsAppAndScrollButtons />
    </main>
  );
}
