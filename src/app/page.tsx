import Image from "next/image";

import { Hero } from "@/app/sections/body components/Hero";
import { Promotion } from "@/app/sections/body components/Promotion";
import { Product } from "./sections/body components/Product";
import { Subscribe } from "./sections/body components/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <Product />
      <Subscribe />
    </>
  );
}
