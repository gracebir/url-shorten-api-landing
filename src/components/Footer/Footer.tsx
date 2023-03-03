import React from "react";
import { logo } from "../../icon/icon";
import { FaFacebookSquare, FaPinterest} from 'react-icons/fa'
import { BsTwitter, BsInstagram} from 'react-icons/bs'

const footeritems = [
  {
    title: "Features",
    items: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    items: ["Blog", "Developers", "Support"],
  },
  {
    title: " Company",
    items: ["About", "Our Team", "Careers", "Contact"],
  },
];

const socialIcons = [FaFacebookSquare,BsTwitter, FaPinterest, BsInstagram]

function Footer() {
  return (
    <div className="py-16 bg-bgVeryViolet text-white">
        <div className="px-8 flex flex-col lg:flex-row lg:items-start lg:container lg:mx-auto lg:justify-between gap-8 items-center">
        <span className="fill-white">{logo}</span>
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-20">
        {footeritems.map((item, i) => (
          <div key={i} className="flex flex-col gap-6 items-center lg:items-start">
            <h1 className="font-bold">{item.title}</h1>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              {item.items.map((link, i) => (
                <a className="text-clGrayish hover:text-clCyan" key={i} href={`#router${i}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex gap-4">
           {socialIcons.map((Social, i)=> (
            <a className="cursor-pointer hover:text-clCyan" href={`#social${i}`} key={i}><Social size={30}/></a>
           ))}
        </div>
      </div>
        </div>
     
    </div>
  );
}

export default Footer;
