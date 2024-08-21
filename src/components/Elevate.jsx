import Image from "next/image";
import React from "react";

const Elevate = () => {
  return (
    <div className="bg-black z-20 flex items-center flex-col p-10 relative">
      <div className="left-0 absolute">
        <Image src={"/Rectangle_right.svg"} width={286} height={802} />
      </div>
      <div className="right absolute right-0">
        <Image src={"/Rectangle_left.svg"} width={286} height={802} />
      </div>
      <div className="my-20">
        <Image src={"/Frame_.svg"} width={204} height={204} />
      </div>
      <div className="top md:w-[462px] lg:w-[462px]  w-full md:text-center lg:text-center md:p-1 gap-7 relative">
        <Image src={"/token.svg"} width={1512} height={986} className="absolute z-10" />
        <h2 className="text-[#FFFFFF]  text-[26px]  md:p-5px md:text-[40px] lg:text-[40px] font-bold py-5 relative z-20">
          Elevate your tokenization experience
        </h2>
        <p className=" text-[#FFFFFFB2]  my-5 md:p-5px md:p-1 relative z-20">
          Transform your assets into digital tokens with Tulu Asset. Gain access
          to global investors, enhance liquidity, and enjoy secure, transparent
          transactions.
        </p>
        <button className="bg-[#FFD900]  relative z-30 font-bold text-sm  text-[#0F0F0F] rounded-[5px] border border-[#FFFFFF1A] px-[41px] py-[11px]">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default Elevate;
