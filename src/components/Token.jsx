import Image from 'next/image'
import React from 'react'

const Token = () => {
  return (
    <div className='bg-black flex flex-col w-full  p-10 gap-10 items-center'>
        
        <div className="details  md:text-center lg:text-center w-full md:w-3/6 lg:w-3/6">
          <div className="">
            <h2 className="text-[#FFFFFF] text-2xl md:text-4xl lg:text-4xl font-bold mb-10 leading-[40px]">
            Seamless tokenization 
            services for All
            </h2>
            <p className=" text-[#FFFFFFB2] text-sm">
            Unlock liquidity, explore new investments, and diversify your portfolio with Tulu Asset. Our platform offers tailored tokenization solutions for business owners, investors, and individuals.
            </p>
            
            <div className="my-10">
              <button className="bg-[#FFD900] text-[#0F0F0F] font-bold px-[41px] py-[11px] text-[14px] rounded-[5px]">
              Explore Market
              </button>
            </div>
          </div>
        </div>
        <div className="image">
            <Image src={"/Group.svg"} width={1202} height={714.43} />
        </div>
    </div>
  )
}

export default Token