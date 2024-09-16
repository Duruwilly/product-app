"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import TemplateHeader from "@/components/Template/Header";
import Template from "@/components/Template";
import ProgressBar from "@/components/ProgressBar";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import AddPhoto from "../../../public/icons/addPhoto";

const validationSchema = Yup.object({
  store_name: Yup.string().required("Please enter your store name"),
  store_tag: Yup.string().required("Please enter the store tag name"),
  store_phone: Yup.string().required(
    "Please enter your correct store phone number"
  ),
  store_email: Yup.string().email("Invalid email address").required(),
  category: Yup.string().required("Enter the category"),
});

type FormschmemaType = Yup.InferType<typeof validationSchema>;

const CreateStore = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      store_name: "",
      store_tag: "",
      store_phone: "",
      store_email: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push("product-edit");
    },
  });

  const getError = (key: keyof FormschmemaType) => {
    return formik.touched[key] && formik.errors[key];
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Template header={<TemplateHeader title="Get started" />}>
      <form onSubmit={formik.handleSubmit}>
        <div className="px-5 overflow-y-auto h-[600px] mt-7">
          <ProgressBar currentStep={3} totalSteps={3} />
          <div className="w-full h-[140px] px-4 py-[10px] border rounded-xl flex flex-col items-center justify-center gap-3 relative mt-5">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="file-input"
            />

            <label htmlFor="file-input" className="cursor-pointer">
              <div className="w-[80px] h-[80px] bg-black rounded-full flex justify-center items-center relative">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Store logo preview"
                    className="object-cover w-[80px] h-[80px] rounded-full"
                  />
                ) : (
                  <div className="w-full h-full rounded-full"></div>
                )}

                <div className="absolute inset-0 flex justify-center items-center z-10">
                  <AddPhoto />
                </div>
              </div>
            </label>

            <span className="text-lightGrey text-xs">Upload store logo</span>
          </div>
          <div className="mt-3">
            <Input
              name="store_name"
              type="text"
              label="Store name"
              value={formik.values.store_name}
              onChange={formik.handleChange}
              error={getError("store_name")}
            />
            <Input
              name="store_tag"
              type="text"
              label="Store tag name"
              value={formik.values.store_tag}
              onChange={formik.handleChange}
              error={getError("store_tag")}
            />
            <Input
              name="store_phone"
              type="text"
              label="Store phone number"
              value={formik.values.store_phone}
              onChange={formik.handleChange}
              error={getError("store_phone")}
            />
            <Input
              name="store_email"
              type="text"
              label="Store email"
              value={formik.values.store_email}
              onChange={formik.handleChange}
              error={getError("store_email")}
            />
            <Input
              name="category"
              type="text"
              label="Category"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={getError("category")}
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

export default CreateStore;
