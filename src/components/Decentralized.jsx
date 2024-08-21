import Image from "next/image";
import React from "react";

const Decentralized = () => {
  return (
    <div className="decentralized text-white bg-black ">
      <div className="title flex justify-center md:flex-nowrap lg:flex-nowrap  gap-10  py-1 text-white ">
        <p className=" border-[#FFD900] border-b rounded-[10px] text-white px-10 w-[222px] text-center py-5 text-[14px] ">
          Features
        </p>
      </div>
      <div className=" flex gap-10 md:w-3/4 lg:w-3/4 w-full flex-wrap lg:flex-nowrap md:flex-nowrap mx-auto p-10 justify-center">
        <div className="image md:w-3/6 w-full lg:w-3/4 mb-5 md:mb-0">
          <Image src={"/decentralized.svg"} width={534} height={400} />
        </div>
        <div className="details md:w-3/4 w-full">
          <div className="">
            <h2 className=" md:text-4xl lg:text-4xl text-2xl font-bold mb-10">
              Fully decentralized. completely secure.
            </h2>
            <p className=" text-[#FFFFFFB2] text-sm mb-16">
              Enjoy the benefits of a decentralized system, eliminating the need
              for intermediaries and enhancing trust. Leverage blockchain
              technology to ensure the highest level of security for your assets
              and transactions.
            </p>
            <div className="my-10  grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 bg-black">
              <div className="one flex items-center gap-5 w-full">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Immutable and tamper-proof records</p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Immutable and tamper-proof records</p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Immutable and tamper-proof records</p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Immutable and tamper-proof records</p>
              </div>
            </div>
            <div className="my-16">
              <button className="bg-[#FFD900] text-[#0F0F0F] font-bold px-[41px] py-[11px] text-[14px] rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" flex gap-10 lg:w-3/4 md:w-3/4 w-full flex-wrap lg:flex-nowrap md:flex-nowrap mx-auto p-10 justify-center">
        <div className="details w-full md:w-3/6">
          <div className="">
            <h2 className=" md:text-4xl lg:text-4xl text-2xl font-bold mb-10">
              Accessible fractional ownership
            </h2>
            <p className=" text-[#FFFFFFB2] text-sm mb-16">
              Invest in high-value assets with ease by purchasing affordable
              fractions. Tulu Asset allows you to diversify and enjoy shared
              ownership without large capital outlays.
            </p>
            <div className="my-10 grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-5">
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Lower Barriers to Entry</p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Cost efficiency </p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Potentials for higher returns</p>
              </div>
              <div className="one flex items-center gap-5">
                <Image src={"/Frame__.svg"} width={48} height={48} />
                <p>Flexibility in Investment Amounts</p>
              </div>
            </div>
            <div className="my-16">
              <button className="bg-[#FFD900] text-[#0F0F0F] font-bold px-[41px] py-[11px] text-[14px] rounded-[5px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="image w-3/6">
          <Image src={"/token_.svg"} width={379} height={424.16} />
        </div>
      </div>
      {/* Developer */}
      <div className="title flex justify-center  py-1 text-white ">
        <p className=" border-[#FFD900] border-b rounded-[10px] text-white px-10 w-[222px] text-center py-5 text-[14px] ">
          Developer
        </p>
      </div>
      <div className=" flex gap-10 md:w-3/4 w-full lg:w-3/4 lg:flex-nowrap flex-wrap md:flex-nowrap mx-auto p-10 justify-center">
        <div className="image w-full md:w-3/6 lg:w-3/6">
          <Image src={"/apiandsdk.svg"} width={413.12} height={253.53} />
        </div>
        <div className="details w-full md:w-3/6 lg:w-3/6">
          <div className="">
            <h2 className=" text-2xl md:text-4xl lg:text-4xl font-bold mb-10 leading-[52px]">
              Leverage Tulu Asset API & SDK for seamless asset tokenization in
              Web3
            </h2>
            <p className=" text-[#FFFFFFB2] text-sm">
            Harness the power of Web3 with Tulu's Asset API and SDK. Our robust tools empower developers to integrate asset tokenization into their applications, streamlining the process and enhancing security
            </p>
            
            <div className="my-16">
              <button className="bg-[#FFD900] text-[#0F0F0F] font-bold px-[41px] py-[11px] text-[14px] rounded-[5px]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decentralized;
