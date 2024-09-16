"use client";

import Button from "@/components/Button/Button";
import Collapsible from "@/components/Collapsable";
import Divider from "@/components/divider";
import Template from "@/components/Template";
import TemplateHeader from "@/components/Template/Header";
import Image from "next/image";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";

const ProductPreview = () => {
  const [readMoreDesc, setReadMoreDesc] = useState(false);
  const [dropdown, setDropDown] = useState({
    product_desc: false,
    about_vendor: false,
  });

  const toggleDropdown = (key: keyof typeof dropdown) => {
    setDropDown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const description =
    "Wholesale and drop shipping are both welcomed. For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive. For drop shipping,we could send the goods to your customers directly and won't leave information about us if you'd like to. How can track my parcel? You can track your parcel on the following website using your tracking number: www.17track.net/en  (Copied to the browser to open) What can I do when purchase protection time is running out? If your purchase protection time is running out, please contact us and we can help you to extend it. So your money will not go to my account.";

  const aboutTags = [
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
    "Quality goods",
    "Nice designs",
  ];

  return (
    <Template header={<TemplateHeader elipses title="Product preview" />}>
      <div className="overflow-y-auto h-[600px] pb-4">
        <Image
          src="/images/demoProductImg.png"
          alt="Welcome"
          className="mb-4 relative"
          width={360}
          height={360}
        />
        <div className="px-5">
          <div className="flex items-center justify-between">
            <p className="text-black font-medium text-sm text-left">
              Gucci bag – the epitome of luxury and sophistication
            </p>
            <div className="flex items-center gap-1">
              <div className="bg-[#f7f7f7] rounded-full h-[36px] w-[36px] flex justify-center items-center">
                <RiShareForwardLine size={20} className="text-lightGrey" />
              </div>
              <div className="bg-[#f7f7f7] rounded-full h-[36px] w-[36px] flex justify-center items-center">
                <CiHeart size={20} className="text-lightGrey" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="text-xl font-medium text-[#3B3B3B]">₦18.0</p>
              <p className="text-[#ACACAC] text-xs font-medium">₦28.0</p>
              <div className="bg-primary rounded-[24px] w-[58px] h-[17px] py-[2px] px-1 text-white text-[10px]">
                25% OFF
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(Number(5))].map((_, index) => (
                <IoStar color="#FDB022" />
              ))}
              <p className="text-[#ACACAC] text-sm">(5 sold)</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <p className="text-black text-sm font-medium text-left">
              Select variants
            </p>
            <div className="space-y-3 mt-4">
              <div>
                <p className="text-[10px] font-medium text-grey text-left">
                  Size: SMALL
                </p>
                <div>{/* content here */}</div>
              </div>
              <div>
                <p className="text-[10px] font-medium text-grey text-left">
                  Color: WHITE
                </p>
                <div>{/* content here */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <Collapsible
              title="Product description"
              isCollapsed={dropdown.product_desc}
              toggleSection={() => toggleDropdown("product_desc")}
            >
              <p className="text-left text-xs text-[#000000B2]">
                {readMoreDesc
                  ? description
                  : `${description.slice(0, 144)}....`}
              </p>
              <button
                className="text-primary text-xs font-medium text-left flex justify-start mt-1"
                onClick={() => setReadMoreDesc(!readMoreDesc)}
              >
                Read more
              </button>
            </Collapsible>
          </div>
        </div>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <Collapsible
              title="About this vendor"
              isCollapsed={dropdown.about_vendor}
              toggleSection={() => toggleDropdown("about_vendor")}
            >
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-start gap-2">
                  <Image
                    src="/images/demoProductImg.png"
                    alt="Welcome"
                    className="relative rounded-full object-cover"
                    width={52}
                    height={52}
                  />
                  <div className="flex flex-col">
                    <p className="text-[#000000E5] font-medium text-xs mb-1 text-left">
                      Gucci Store
                    </p>
                    <div className="flex items-center">
                      <p className="text-[#00000066] text-xs">Fashion</p>
                      <BsDot size={20} />
                      <div className="flex items-center gap-[2px]">
                        <IoStar color="#000" />
                        <p className="text-[10px] text-[#00000066]">5.4</p>
                      </div>
                      <BsDot size={20} />
                      <div className="flex items-center gap-[2px]">
                        <SlPeople size={14} />
                        <p className="text-[10px] text-[#00000066]">100k</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-primary text-xs font-medium">Follow</p>
              </div>
              <p className="text-[#000000B2] text-xs text-left">
                Vendor description: You can track your parcel on the following
                website using your tracking number: www.17track...
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {aboutTags.map((about, index) => (
                  <div
                    key={index}
                    className="bg-[#f7f7f7] py-0 px-1 text-[10px] text-[#000000E5] w-fit rounded-full"
                  >
                    {about}
                  </div>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-6 border-t-[0.5px]">
        <Button type="button" label="Publish" />
      </div>
    </Template>
  );
};

export default ProductPreview;
