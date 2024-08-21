import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Assest = () => {
  return (
    <div className=" mx-auto bg-[#FFFDF4]">
      <div className="w-[85%] flex-wrap md:flex-nowrap lg:flex-nowrap flex justify-center items-center mx-auto gap-10">
        <div className="border-r w-full py-10 px-10">
          <button className="border p-4 px-10 rounded-full border-[#0000001A]">
            What can be tokenized
          </button>
          <div className="item border-t mt-5">
            <div className="flex py-5 gap-10">
              <div>
                <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-bold">Real Estate Asset</h2>
                <p className="text-[#000000B2] py-5">
                  Easily convert your property into digital tokens. Invest
                  smarter, faster, and with more transparency. Join us today!
                </p>
              </div>
              <button className="plus">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V16M16 12H8"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                    />
                  </svg>
              </button>
            </div>
          </div>
          <div className="item border-t">
            <div className="flex py-5 gap-10 justify-between">
              <div>
                <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-bold">Precious stones</h2>
                
              </div>
              <button className="plus">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V16M16 12H8"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                    />
                  </svg>
              </button>
            </div>
          </div>
          <div className="item border-t my-1">
            <div className="flex justify-between gap-10 py-5">
              <div>
                <h2 className="text-[20px] md:text-[30px] lg:text-[30px] font-bold">
                Paintings
                </h2>
                
              </div>
              <button className="plus">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8V16M16 12H8"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                    />
                  </svg>
              </button>
            </div>
          </div>
          <button className="bg-[#FFD900] rounded-sm text-[#000000] px-10 py-3 font-medium text-sm">
          Tokenize asset
          </button>
        </div>
        <div className=" md:w-[50%] w-[80%] ">
          <Image src={"/Frame1.svg"} width={1000} height={1000}/>
        </div>
      </div>
    </div>
  );
};

export default Assest;
