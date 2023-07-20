import { Button } from "@/components/ui/button";
export function Subscribe() {
  return (
    <>
      <div className=" mx-5 tablet:mx-10 laptop:mx-20 desktop:mx-40 mt-40">
        <div className="flex relative place-items-center place-content-center ">
          <div className=" absolute inset-0 top-0 left-0 z-0 aspect-auto text-center">
            <h1 className=" text-center text-7xl desktop:laptop:text-9xl font-bold opacity-10 select-none ">
              Newsletter
            </h1>
          </div>
          <div className=" mt-6 z-10">
            <div>
              <p className=" text-center font-bold text-2xl">
                Subscribe Our Newsletter
              </p>
              <p className=" text-center text-lg">
                Get the latest information and promo offers directy
              </p>
              <br />
            </div>
            <div className=" flex justify-center bg-transparent items-center ">
              <input
                type="text"
                placeholder="Input Email Address"
                className=" text-base desktop:laptop:text-lg border border-black rounded desktop:laptop:w-[600px] w-48  mr-4 tracking-wider px-4"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
