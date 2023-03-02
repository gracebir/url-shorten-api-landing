import React from "react";
import { brand, customizable, detail } from "../../icon/icon";
import Brandcard, { brandCardProp } from "../Brandcard/Brandcard";

const cardData: Array<brandCardProp> = [
  {
    icon: brand,
    title: "Brand Recognition",
    detail:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    className: "",
  },
  {
    icon: detail,
    title: "Detailed Records",
    detail:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    className: "md:mt-[3.5rem]",
  },
  {
    icon: customizable,
    title: "Fully Customizable",
    detail:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    className: "md:mt-[7rem]",
  },
];

function Brand() {
  return (
    <div className="bg-gray-300 py-8 md:py-20 flex flex-col gap-8 md:gap-10">
        <div className="text-center flex flex-col gap-4 md:gap-6 md:w-[35rem] md:mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Advanced Statistics</h1>
            <p className="text-clGrayish md:text-[1.2rem] md:leading-[2]"> Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
        </div>
      <div>
        <div className="bg-clCyan container w-[10px] md:w-full h-[120vh] md:h-[10px] mx-auto absolute right-0 left-0 md:top-[187vh]"></div>
        <div className="flex flex-col gap-8 md:container md:mx-auto md:flex-row md:gap-8">
          {cardData.map((card, i) => (
            <Brandcard
              icon={card.icon}
              title={card.title}
              detail={card.detail}
              className={card.className}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
