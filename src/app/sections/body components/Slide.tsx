"use client";

import Image from "next/image";
import Product1 from "../../../../public/product 1.png";
import Product2 from "../../../../public/product 2.png";
import Product3 from "../../../../public/product 3.png";
import Product4 from "../../../../public/product 4.png";
import Product5 from "../../../../public/product 5.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

//import "./styles.css";

export function Slide() {
  let sizeVal: number = 350;
  return (
    <div className=" mt-14 mx-7 tablet:mx-10 laptop:mx-20 desktop:mx-40 max-w-full  ">
      <div className=" ">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoHeight={true}
          grabCursor={true}
          freeMode={true}
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 4,
            // },
            768: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[FreeMode]}
          className="Swiper"
        >
          <SwiperSlide>
            <div className=" flex p-6 overflow-hidden bg-cover bg-no-repeat rounded ">
              <div className="  transition-transform duration-700 ease-in-out hover:scale-110">
                <Image
                  className=" object-fill "
                  src={Product1}
                  alt="Flex Sweatshirt on a model"
                  width={sizeVal}
                  height={sizeVal * 1.1}
                  loading="lazy"
                />
                Product 1
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex p-6 overflow-hidden bg-cover bg-no-repeat rounded ">
              <div className="  transition-transform duration-700 ease-in-out hover:scale-110">
                <Image
                  className=" object-fill"
                  src={Product2}
                  alt="Flex Sweatshirt on a model"
                  width={sizeVal}
                  height={sizeVal * 1.1}
                  loading="lazy"
                />
                Product 2
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex p-6 overflow-hidden bg-cover bg-no-repeat rounded ">
              <div className="  transition-transform duration-700 ease-in-out hover:scale-110">
                <Image
                  className=" object-fill"
                  src={Product3}
                  alt="Flex Sweatshirt on a model"
                  width={sizeVal}
                  height={sizeVal * 1.1}
                  loading="lazy"
                />
                Product 3
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" object-fill">
            <div className=" flex p-6 overflow-hidden bg-cover bg-no-repeat rounded ">
              <div className="  transition-transform duration-700 ease-in-out hover:scale-110">
                <Image
                  className=" "
                  src={Product4}
                  alt="Flex Sweatshirt on a model"
                  width={sizeVal}
                  height={sizeVal * 1.1}
                  loading="lazy"
                />
                Product 4
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" object-fill">
            <div className=" flex p-6 overflow-hidden bg-cover bg-no-repeat rounded ">
              <div className="  transition-transform duration-700 ease-in-out hover:scale-110">
                <Image
                  className=" object-fill"
                  src={Product5}
                  alt="Flex Sweatshirt on a model"
                  width={sizeVal}
                  height={sizeVal * 1.1}
                  loading="lazy"
                />
                Product 5
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
