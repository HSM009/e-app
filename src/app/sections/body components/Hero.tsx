import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import frontPic from "../../../../public/header.webp";
import bazaar from "../../../../public/bazaar.webp";
import bustle from "../../../../public/bustle.webp";
import instyle from "../../../../public/instyle.webp";
import versace from "../../../../public/versace.webp";

export function Hero() {
  const brandImages: number = 200;

  return (
    <section className="bg-amber-50 py-10">
      <div className=" mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-16">
          <div className=" col mt-10 laptop:mt-32 ">
            <span className="bg-blue-200 text-blue-800 font-semibold desktop:py-3 tablet:py-2 py-1 desktop:px-10 tablet:px-6 px-4 rounded desktop:text-xl tablet:text-sm  text-xs ">
              Sale 70%
            </span>

            <h1 className="text-3xl laptop:text-5xl font-extrabold tracking-tight pt-6 laptop:pt-10">
              An Industrial Take on Streetwear
            </h1>
            <p className="text-base laptop:text-lg">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>

            <Button className="mt-8 laptop:mt-20">
              <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
            </Button>
            <div className="flex flex-wrap gap-4 mt-8 laptop:mt-20 tablet:order-2 laptop:order-2 ">
              <div className="w-24 h-24 laptop:w-32 laptop:h-32">
                <Image
                  src={bazaar}
                  alt="bazaar"
                  width={brandImages}
                  height={brandImages}
                />
              </div>
              <div className="w-24 h-24 laptop:w-32 laptop:h-32">
                <Image
                  src={bustle}
                  alt="bustle"
                  width={brandImages}
                  height={brandImages}
                />
              </div>
              <div className="w-24 h-24 laptop:w-32 laptop:h-32">
                <Image
                  src={versace}
                  alt="versace"
                  width={brandImages}
                  height={brandImages}
                />
              </div>
              <div className="w-24 h-24 laptop:w-32 laptop:h-32">
                <Image
                  src={instyle}
                  alt="instyle"
                  width={brandImages}
                  height={brandImages}
                />
              </div>
            </div>
          </div>
          <div className="col mt-10 laptop:mt-0 relative aspect-square">
            <div className="absolute inset-0 bg-amber-100 rounded-full "></div>
            <Image
              className="rounded-full "
              src={frontPic}
              fill={true}
              //   style={{ objectFit: "cover", objectPosition: "center" }}
              alt="Company Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
