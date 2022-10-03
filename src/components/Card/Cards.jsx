import React from "react";
import { TbExternalLink } from "react-icons/tb";
import ExpData from "../../Data/About.json";

const Cards = () => {
  //use state for storing the your empty data , create an empty state variable which would be initially be an empty array and then use that varible to hold the data from json file and use that state variable to save data.
  //Note - .jsx file should be used only for creating components and props , json file should be used for json data.
  return (
    <div className="space-y-4">
      {ExpData.map((detail) => {
        return (
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="bg-[#202022] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-white flex items-center">
                  {detail.type}
                </p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={detail.logo}
                    alt="work logo"
                  />
                  <div className="">
                    <p className="text-white leading-none font-bold text-2xl">
                      {detail.title}
                    </p>
                    <p className="text-[#a5a5a7] text-sm font-light">
                      {detail.timeLine}
                    </p>
                  </div>
                </div>

                <ul className="text-[#a5a5a7] font-light">
                  <li>{detail.content1}</li>
                  <li>{detail.content2}</li>
                  <li>{detail.content3}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
