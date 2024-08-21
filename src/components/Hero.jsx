import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-black mx-auto relative pt-12">
      {/* <div className="ellipse absolute  top-1">
        <svg
          width="1185"
          height="700"
          viewBox="0 0 1185 1184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1484_2858)">
            <ellipse cx="592.5" cy="592" rx="112.5" ry="112" fill="#FFD900" />
          </g>
          <defs>
            <filter
              id="filter0_f_1484_2858"
              x="0"
              y="0"
              width="1185"
              height="1184"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="240"
                result="effect1_foregroundBlur_1484_2858"
              />
            </filter>
          </defs>
        </svg>
      </div> */}
      <div className=" flex  flex-wrap md:flex-nowrap lg:flex-nowrap gap-10 items-center mx-auto w-full p-10 md:p-0 md:w-[80%] lg:w-[80%]  ">
        <div className="first text-[#FFFFFF] w-[500px] relative leading-9">
          <h1 className=" text-[#FFFFFF] md:text-center lg:text-center text-custom-size-h text-2xl lg:text-3xl md:text-3xl py-5 leading-[50px]  font-bold">
            Invest, own & trade real world assets
          </h1>
          <p className=" text-[#FFFFFF] md:text-center lg:text-center text-custom-size-p text-opacity-[0.7] ">
            Unlock the potential of real-world assets through tokenization.
          </p>
          <div className="actions  my-6 flex flex-wrap md:flex-nowrap lg:flex-nowrap sm:justify-center gap-5 justify-center">
            <button className=" bg-[#FFD900] w-full md:w-[200px] lg:w-[200px] px-[41px] font-bold py-[11px] text-[#000000] border-[#FFFFFF1A] border rounded-[5px]  ">
              Create asset
            </button>
            <button className=" border w-full md:w-[200px] lg:w-[200px] border-[#FFFFFF1A] text-[#FFFFFF] bg-[#181818] px-[41px] py-[11px] rounded-[5px]">
              Invest now
            </button>
          </div>
        </div>

        <div className="second">
          <Image src={"/svgg.svg"} width={565.67} height={565.67} />
        </div>
      </div>
      <div className="images flex flex-col items-center px-10 justify-center mx-auto py-10">
        <h2 className="text-[#FFFFFF8A] my-3">
          Trusted by brands around the world
        </h2>
        <div className="logo">
          <Image src={"/Frame.svg"} width={1000} height={565.67} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
