"use client";

import Button from "@/components/Button/Button";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import SubHeader from "@/components/SubHeader";
import Template from "@/components/Template";
import TemplateHeader from "@/components/Template/Header";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input/Input";

const validationSchema = Yup.object({
  emailOrPhone: Yup.string().required("Please enter your phone or email"),
});

type FormschmemaType = Yup.InferType<typeof validationSchema>;

const GetStarted = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push("basic-info");
    },
  });

  const getError = (key: keyof FormschmemaType) => {
    return formik.touched[key] && formik.errors[key];
  };

  return (
    <Template header={<TemplateHeader title="Get started" />}>
      <form onSubmit={formik.handleSubmit}>
        <div className="px-5 overflow-y-auto h-[600px] mt-7">
          <ProgressBar currentStep={1} totalSteps={3} />
          <div className="mt-5">
            <Header title="Enter your phone number or email to get started" />
          </div>
          <SubHeader title="We will send you a verification code for confirmation" />
          <div className="mt-5">
            <Input
              name="emailOrPhone"
              type="text"
              label="Enter phone number or email"
              value={formik.values.emailOrPhone}
              onChange={formik.handleChange}
              error={getError("emailOrPhone")}
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

export default GetStarted;
