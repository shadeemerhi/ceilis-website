import Button from "./components/design-system/Button";
import Content from "./components/pages/home/content/Content";
import ContentItem from "./components/pages/home/content/ContentItem";
import Footer from "./components/pages/home/footer/Footer";
import Hero from "./components/pages/home/hero/Hero";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
