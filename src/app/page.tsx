"use client";
import React from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Template from "@/components/Template";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/store/context/AppContext";

const WelcomePage = () => {
  const router = useRouter();
  const goals = [
    "Reach Millions of Shoppers",
    "Easy Product Listing",
    "Secure and Fast Payments",
    "Boost Your Visibility",
  ];
  const { demoValue } = useAppContext();
  console.log(demoValue);

  return (
    <Template>
      <div className="px-5 overflow-y-auto h-[651px]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/welcome-illustration.png"
            alt="Welcome"
            className="mb-4"
            width={296}
            height={210}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-black">Welcome</h1>
        <p className="text-center mb-5 text-sm text-black">
          The safest platfrom to shop from social media vendors
        </p>
        <div className="bg-secondary border-[0.5px] border-primary rounded-xl py-3 px-4 mb-4">
          <ul className="text-sm text-black flex flex-col gap-3 font-medium">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className="text-primary"
                />
                <li>{goal}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-4 justify-end px-6 border-t-[0.5px]">
        <Button
          type="button"
          label="Get started"
          onClick={() => router.push("get-started")}
        />
      </div>
    </Template>
  );
};

export default WelcomePage;
