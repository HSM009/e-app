"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Search, ShoppingCart } from "lucide-react";
import CompanyLogo from "../../../../public/Logo.webp";
import menuIcon from "../../../../public/menu.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section>
      <nav className="   mobile:mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <Link href="#" className="flex items-center">
            <Image src={CompanyLogo} className="" alt="Logo" />
          </Link>

          {/* tablet menu toggle button */}
          <div className="flex tablet:order-2">
            <Button className="px-6 py-2 rounded-full group bg-amber-50 border-2  border-amber-500  hover:bg-amber-500 ">
              <ShoppingCart className="relative  text-amber-500 group-hover:border-amber-50 group-hover:text-white object-fill group-hover:transition-transform group-hover:duration-300 group-hover:transform group-hover:scale-110" />

              <span className="absolute top-1 h-6 w-6 text-center rounded-full bg-red-400 text-white ">
                0
              </span>
            </Button>
            <Button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center ml-2 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg tablet:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls={"navbar-sticky"}
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              {/* <span className="sr-only"></span> */}
              <Image src={menuIcon} alt="Open main menu" />
            </Button>
          </div>

          {/* Desktop menu */}
          <div
            className={`items-center justify-between w-full tablet:flex tablet:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 tablet:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 tablet:flex-row tablet:space-x-8 tablet:mt-0 tablet:border-0 tablet:bg-white dark:bg-gray-800 tablet:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:hover:text-blue-700 tablet:p-0 "
                >
                  Female
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:hover:text-blue-700 tablet:p-0 "
                >
                  Male
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:hover:text-blue-700 tablet:p-0 "
                >
                  Kid
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:hover:text-blue-700 tablet:p-0 "
                >
                  All Product
                </Link>
              </li>
              <li>
                <div className="flex ">
                  <Search className="bg-transparent rounded-lg text-amber-500" />
                  <input
                    type="text"
                    placeholder="What you are looking for"
                    className="rounded-lg px-2 text-amber-500 placeholder-amber-500 bg-amber-50 focus:border-amber-500 hover:border-amber-500 border-2 border-amber-100
           outline-none tablet:text-xs tablet:w-40 desktop:w-80 desktop:text-base"
                  />
                </div>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
