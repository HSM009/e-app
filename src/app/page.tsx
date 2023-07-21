import { Hero } from "@/app/sections/body components/Hero";
import { Promotion } from "@/app/sections/body components/Promotion";
import { Product } from "./sections/body components/Product";
import { Subscribe } from "./sections/body components/Subscribe";
import { ScrollToTopScript } from "./sections/body components/ScrollToTopScript";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <Product />
      <Subscribe />
      <ScrollToTopScript />
    </>
  );
}
