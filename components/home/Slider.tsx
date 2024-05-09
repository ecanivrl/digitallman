"use client";

import React, { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import RightIcon from "@/public/icons/circle-arrow-right.svg";
import LeftIcon from "@/public/icons/circle-arrow-left.svg";
import clsx from "clsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

// Import Swiper core and required modules
import {
  Autoplay,
  FreeMode,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import useResponsive from "../hooks/useResponsive";

const Slider = ({
  className,
  cards,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  cards: ReactNode[];
}) => {
  const { sm } = useResponsive({ watchPoints: ["sm"] });
  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <div className={twMerge("relative", className)} {...rest}>
      {/* Navigation */}
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-between gap-3 max-sm:hidden">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white p-px hover:scale-125">
          <LeftIcon
            className="h-full w-full cursor-pointer [&_circle]:stroke-white [&_path]:fill-black"
            onClick={() => {
              swiper?.slidePrev();
            }}
          />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white p-px hover:scale-125">
          <RightIcon
            className="h-full w-full cursor-pointer [&_circle]:stroke-white [&_path]:fill-black"
            onClick={() => {
              swiper?.slideNext();
            }}
          />
        </div>
      </div>

      <Swiper
        onSwiper={setSwiper}
        slidesPerView="auto"
        modules={[Navigation, Pagination, Autoplay, FreeMode, Mousewheel]}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: false,
          sticky: false,
        }}
        mousewheel={{
          forceToAxis: true,
        }}
        speed={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        pagination={
          sm
            ? false
            : {
                clickable: true,
                dynamicBullets: true,
              }
        }
        loop={true}
        navigation={false}
        className={clsx(
          "[--swiper-navigation-size:1.5rem]",
          "[--swiper-theme-color:#D01818]",
          "[&_.swiper-slide]:max-w-min",
        )}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
