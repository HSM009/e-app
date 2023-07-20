import Image from "next/image";
import AllProductImage from "../../../../public/AllProductImg.webp";
import { Button } from "@/components/ui/button";
import { Slide } from "../body components/Slide";

export function Product() {
  return (
    <>
      <div className="text-center mt-40">
        <h1 className="text-sm text-blue-500 font-semibold">PRODUCTS</h1>
        <h1 className="text-4xl mt-1 font-bold">Check What we Have</h1>
      </div>

      <div className=" ">
        <Slide />
      </div>

      <div className=" mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40 ">
        <div className=" grid place-items-center mt-40">
          <div className=" max-w-full gap-6 grid  desktop:laptop:grid-cols-2 h-auto">
            {/* --First Grid */}
            <div className=" desktop:laptop:col-start-2">
              <p className=" desktop:laptop:text-6xl  text-3xl text-center font-semibold tracking-wide h-auto">
                Unique and Authentic Vintage Designer Jewellery
              </p>
            </div>
            {/* --Second Grid */}
            <div className=" desktop:laptop:col-start-1 desktop:laptop:row-start-2 text-center">
              <div className=" relative grid grid-cols-2  gap-8 desktop:laptop:gap-24">
                <span className=" absolute inset-0 top-0 right-0 text-8xl desktop:laptop:text-9xl font-bold opacity-10 gap-x-36 gap-y-16 pr-36">
                  Different From Others
                </span>
                <div className=" grid col-start-1 row-start-1 ">
                  <span className="  text-xl font-bold desktop:laptop:text-3xl  ">
                    Using Good Quality Materials
                  </span>
                  <br />
                  <span className=" text-base desktop:laptop:text-2xl">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </span>
                </div>

                <div className="  grid col-start-2 row-start-1">
                  <span className=" text-xl font-bold desktop:laptop:text-3xl">
                    100% Handmade Products
                  </span>
                  <br />
                  <span className=" text-base desktop:laptop:text-2xl">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </span>
                </div>
                <div className=" grid col-start-1 row-start-2 ">
                  <span className=" text-xl font-bold desktop:laptop:text-3xl">
                    Modern Fashion Design
                  </span>
                  <br />
                  <span className="text-base desktop:laptop:text-2xl">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </span>
                </div>
                <div className=" grid col-start-2 row-start-2 ">
                  <span className=" text-xl font-bold desktop:laptop:text-3xl">
                    Discount for Bulk Orders
                  </span>
                  <br />
                  <span className=" text-base desktop:laptop:text-2xl">
                    Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
            </div>
            {/* --Third Grid */}
            <div className=" desktop:laptop:col-start-2 desktop:laptop:row-start-2 text-center">
              <div className="grid grid-cols-2 gap-x-6">
                <div className="col col-start-1 col-span-1">
                  <div>
                    <Image
                      className=""
                      src={AllProductImage}
                      alt="All Product Image"
                    />
                  </div>
                </div>
                <div className="flex flex-col col col-start-2 col-span-1 place-content-center">
                  <p className=" desktop:laptop:text-lg text-sm text-justify">
                    This piece is ethically crafted in our small family-owned
                    workshop in Peru with unmatched attention to detail and
                    care. The Natural color is the actual natural color of the
                    fiber, undyed and 100% traceable.
                  </p>
                  <div className="mt-10">
                    <Button className="h-10 w-52">All Products</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
