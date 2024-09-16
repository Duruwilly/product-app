"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import TemplateHeader from "@/components/Template/Header";
import Template from "@/components/Template";
import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import InstagramIcon from "../../../public/icons/Instagram";
import TiktokIcon from "../../../public/icons/tiktio";
import GoogleIcon from "../../../public/icons/google";

const validationSchema = Yup.object({
  full_name: Yup.string().required("Please enter your full name"),
  user_name: Yup.string().required("Please enter your user name"),
  phone: Yup.string().required("Please enter your correct phone number"),
  email: Yup.string().email("Invalid email address").required(),
});

type FormschmemaType = Yup.InferType<typeof validationSchema>;

const BasicInfo = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      user_name: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push("create-store");
    },
  });

  const getError = (key: keyof FormschmemaType) => {
    return formik.touched[key] && formik.errors[key];
  };

  return (
    <Template header={<TemplateHeader title="Get started" />}>
      <form onSubmit={formik.handleSubmit}>
        <div className="px-6 overflow-y-auto h-[600px] mt-7">
          <ProgressBar currentStep={2} totalSteps={3} />
          <div className="mt-5">
            <Header title="Complete profile setup" />
          </div>
          <div className="mt-5">
            <SubHeader title="Connect your socials for quick setup" />
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl py-[10px] px-10 bg-[#f7f7f7] flex-1 cursor-pointer">
              <InstagramIcon />
            </div>
            <div className="rounded-xl py-[10px] px-10 bg-[#f7f7f7] flex-1 cursor-pointer">
              <TiktokIcon />
            </div>
            <div className="rounded-xl py-[10px] px-10 bg-[#f7f7f7] flex-1 cursor-pointer">
              <GoogleIcon />
            </div>
          </div>
          <div className="mt-5">
            <SubHeader title="Or enter manually" />
          </div>
          <div className="mt-3">
            <Input
              name="full_name"
              type="text"
              label="Full name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              error={getError("full_name")}
            />
            <Input
              name="user_name"
              type="text"
              label="User name"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              error={getError("user_name")}
            />
            <Input
              name="phone"
              type="text"
              label="Phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={getError("phone")}
            />
            <Input
              name="email"
              type="text"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={getError("email")}
            />
          </div>
        </div>
        <div className="flex gap-4 justify-end px-6 border-t-[0.5px]">
          <Button
            type="submit"
            label="Continue"
            disabled={!formik.isValid || formik.isSubmitting}
          />
        </div>
      </form>
    </Template>
  );
};

export default BasicInfo;
