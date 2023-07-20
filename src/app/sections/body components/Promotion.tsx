import Image from "next/image";
import React from "react";
import PromoMidPic from "../../../../public/promo-mid-pic.webp";
import PromoRightPic from "../../../../public/promo-right-pic.webp";
import PromoLeftPic from "../../../../public/event1.webp";

export function Promotion() {
  return (
    <>
      <div className="text-center mt-40">
        <h1 className="desktop:text-lg tablet:text-sm text-xs text-blue-500 font-semibold">
          PROMOTIONS
        </h1>
        <h1 className="desktop:text-4xl tablet:text-2xl text-xl mt-1 font-bold">
          OUR PROMOTION EVENTS
        </h1>
      </div>
      <div className=" mt-20 mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40 ">
        {/* <div className=" grid  "> */}
        <div className="  gap-4 grid grid-cols-1 desktop:laptop:grid-cols-5 ">
          {/* --First Grid */}
          <div className=" flex col-span-0 desktop:laptop:col-span-3  desktop:laptop:row-start-1 bg-red-300 rounded shadow-md justify-center items-center">
            <div className=" grid  gap-4 col col-start-1   ">
              <p className="  text-center ">
                <span className="  text-xl font-extrabold ">GET UP TO </span>
                <span className=" text-3xl text-green-600 font-extrabold">
                  60%
                </span>
              </p>
              <p className="  font-semibold text-lg">For the summer season</p>
            </div>
            <div className=" col col-start-2 ">
              <Image
                className=" object-center "
                src={PromoLeftPic}
                alt="Flex Sweatshirt on a model"
              />
            </div>
          </div>
          {/* --Second Grid */}
          <div className=" flex justify-center items-center desktop:laptop:col-span-3  desktop:laptop:row-start-2 bg-black rounded shadow-md desktop:laptop:max-h-full place-items-center ">
            <div className=" text-white text-center p-4">
              <p className="text-3xl font-extrabold">GET 30% OFF</p>
              <p className="text-xs mt-3">USE PROMO CODE</p>
              <p className="text-xl font-bold tracking-widest bg-[#474747] rounded px-10 desktop:laptop:px-20 ">
                DINEWEEKENDSALE
              </p>
            </div>
          </div>
          {/* --Third Grid */}
          <div className=" row-span-2 flex flex-col w-full bg-red-300 rounded shadow-md p-4">
            <div className="text-center">
              <p>Flex Sweatshirt</p>
              <p>
                <span className="line-through">$100.00</span>
                <span className="font-bold"> $75.00 </span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="object-bottom "
                src={PromoMidPic}
                alt="Model of promotion"
              />
            </div>
          </div>
          {/* --Fourth Grid */}
          <div className=" row-span-2 flex flex-col w-full bg-red-300 rounded shadow-md p-4 ">
            <div className="text-center">
              <p>Flex Push Button Bomber</p>
              <p>
                <span className="line-through">$225.00</span>
                <span className="font-bold"> $190.00 </span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="object-bottom "
                src={PromoRightPic}
                alt="Model of promotion"
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
