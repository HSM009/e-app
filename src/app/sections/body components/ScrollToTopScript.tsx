"use client";

import { ArrowUp } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export function ScrollToTopScript() {
  const [showButton, setShowButton] = React.useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className=" mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40 mt-40">
        <Button
          onClick={backToTop}
          className={`${
            showButton ? "inline-block" : "hidden"
          } opacity-50 fixed desktop:right-20 desktop:bottom-20 laptop:right-10 laptop:bottom-10 tablet:right-5 tablet:bottom-5 right-2 bottom-2 rounded-full group bg-transparent border-2 border-amber-500 hover:bg-amber-500 ease-in-out z-10`}
        >
          <ArrowUp className=" text-amber-500  group-hover:border-amber-50 group-hover:text-white object-fill group-hover:transition-transform group-hover:duration-300  " />
        </Button>
      </div>
    </>
  );
}
