import Image from "next/image";
import React from "react";

const TuluAssest = () => {
  return (
    <div className=" w-full">
      <div className="bg-black flex px-20 flex-col gap-10 py-20  relative items-center md:p-5">
        <div className="top w-full md:w-[622px] mx-auto flex flex-col items-center relative z-20 gap-3">
          <button className="bg-[#000]  font-normal text-[14px] text-sm text-[#FFFFFF] rounded-[5px] border-b border-[#FFD900] px-[41px] py-[11px]">
            Key highlights
          </button>
          <h2 className="text-[#FFFFFF] md:text-center lg:text-center text-[20px] md:text-[40px] lg:text-[40px] font-bold py-5">
            Empower your investments with Tulu Asset
          </h2>
          <p className=" text-[#FFFFFFB2] md:text-center lg:text-center">
            With Tulu Asset, you can transform your company’s equity into
            bite-sized tokens.
          </p>
        </div>
        <div className="image absolute z-10 top-0">
          <Image src={"/Rectangle_.svg"} width={622} height={380} />
        </div>
      </div>
      <div className="bg-[#181818] py-24 px-5
      ">
        <div className="  w-full flex-wrap md:flex-nowrap lg:flex-nowrap px-3 mx-auto flex justify-center gap-4">
          <div className="one md:w-[383px] lg:w-[383px] w-full flex flex-col gap-10  ">
            <div className="top py-16 bg-[#0F0F0F] rounded-[14px] border-b border-[#FFD900]">
              <div className="relative  flex justify-center  border-dashed border-full ">
                <Image
                  src={"/Ellipse.svg"}
                  className=" absolute"
                  width={250}
                  height={250}
                />
                <Image
                  src={"/token__.svg"}
                  className=" "
                  width={189}
                  height={154}
                />
              </div>
              <div className="p-10">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Convert Equity to Tokens
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  With Tulu Asset, you can transform your company’s equity into
                  bite-sized tokens.
                </p>
              </div>
            </div>
            <div className="end p-10 rounded-[14px] bg-[#0F0F0F] border-b border-[#FFD900]">
              <div className=" flex justify-center">
                <Image src={"/growth.svg"} width={104} height={113} />
              </div>
              <div className="">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Drive Transparent Growth
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  Foster growth with clear and transparent investment
                  mechanisms.
                </p>
              </div>
            </div>
          </div>
          <div className="two md:w-[383px] lg:w-[383px] w-full flex flex-col gap-10 ">
            <div className="top p-10 rounded-[14px] bg-[#0F0F0F] border-b border-[#FFD900]">
              <div className="flex justify-center">
                <Image src={"/growth.svg"} width={104} height={113} />
              </div>
              <div className="">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Drive Transparent Growth
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  Foster growth with clear and transparent investment
                  mechanisms.
                </p>
              </div>
            </div>
            <div className="end py-16 bg-[#0F0F0F]  rounded-[14px] border-b border-[#FFD900]">
              <div className="relative  flex justify-center  border-dashed border-full ">
                <Image
                  src={"/Ellipse.svg"}
                  className=" absolute"
                  width={250}
                  height={250}
                />
                <Image
                  src={"/token__.svg"}
                  className=" "
                  width={189}
                  height={154}
                />
              </div>
              <div className="p-10">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Convert Equity to Tokens
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  With Tulu Asset, you can transform your company’s equity into
                  bite-sized tokens.
                </p>
              </div>
            </div>
          </div>
          <div className="three md:w-[383px] lg:w-[383px] w-full flex flex-col gap-10 ">
            <div className="top py-16 bg-[#0F0F0F] rounded-[14px] border-b border-[#FFD900]">
              <div className="relative  flex justify-center  border-dashed border-full ">
                <Image
                  src={"/Ellipse.svg"}
                  className=" absolute"
                  width={250}
                  height={250}
                />
                <Image
                  src={"/token__.svg"}
                  className=" "
                  width={189}
                  height={154}
                />
              </div>
              <div className="p-10">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Convert Equity to Tokens
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  With Tulu Asset, you can transform your company’s equity into
                  bite-sized tokens.
                </p>
              </div>
            </div>
            <div className="end p-10 rounded-[14px] bg-[#0F0F0F] border-b border-[#FFD900]">
              <div className="flex justify-center">
                <Image src={"/growth.svg"} width={104} height={113} />
              </div>
              <div className="">
                <h4 className="text-[#FFFFFF] font-bold text-[20px] md:text-[25px] lg:text-[25px] py-5">
                  Drive Transparent Growth
                </h4>
                <p className=" text-[14px] text-[#FFFFFFB2] text-sm">
                  Foster growth with clear and transparent investment
                  mechanisms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuluAssest;
