"use client";

import Divider from "@/components/divider";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Input/TextArea";
import Template from "@/components/Template";
import TemplateHeader from "@/components/Template/Header";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { BsCheck2, BsDot } from "react-icons/bs";
import * as yup from "yup";
import UploadIcon from "../../../public/icons/upload";
import Collapsible from "@/components/Collapsable";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Checkbox from "@/components/Input/Checkbox";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Switch from "@/components/Switch";
import MultiInput from "@/components/Input/MultiInput";
import { FiPlus } from "react-icons/fi";

const validationSchema = yup.object({
  product_title: yup.string().required("Please enter your product title"),
  product_desc: yup
    .string()
    .required("Please enter the store product description"),
  price: yup
    .number()
    .required("Please enter the price")
    .positive("Price must be a positive value")
    .typeError("Price must be a valid number"),
  old_price: yup
    .number()
    .required("Please enter the old price")
    .typeError("Old price must be a valid number"),
  product_collection: yup
    .array()
    .of(yup.string().required("Product collection cannot be empty"))
    .min(1, "Please add at least one product collection"),
  color: yup
    .array()
    .of(yup.string().required("Product color cannot be empty"))
    .min(1, "Please add at least one color"),
  size: yup
    .array()
    .of(yup.string().required("Product size cannot be empty"))
    .min(1, "Please add at least one size"),
  inventory_stock: yup
    .number()
    .required("Enter the inventory stock")
    .positive("Stock value must be positive")
    .typeError("Stock must be a valid number"),
});

const ProductEdit = () => {
  const isEdtiting = false;
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [options, setOptions] = useState([{ id: 1, type: "Color" }]);
  const [imagePreview, setImagePreview] = useState<
    { name: string; img: string }[] | null
  >(null);

  const handleToggle = (index: number) => {
    setImagePreview((prev) => prev?.filter((_, i) => i !== index) || null);
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  const addNewOptions = () => {
    setOptions((prev) => [...prev, { id: prev.length + 1, type: "Size" }]);
  };

  const [dropdown, setDropDown] = useState({
    image: false,
    shipping: false,
    basic_details: false,
    prices: false,
  });

  const initialValues = {
    product_title: "",
    product_desc: "",
    price: "",
    old_price: "",
    product_collection: [],
    color: [],
    size: [],
    inventory_stock: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // submition func here
    },
  });

  const getError = (key: keyof typeof initialValues) => {
    return formik.touched[key] && formik.errors[key];
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      console.log(fileArray);
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage = {
            name: file.name,
            img: reader.result as string,
          };
          setImagePreview((state) =>
            state ? [...state, newImage] : [newImage]
          );
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const toggleDropdown = (key: keyof typeof dropdown) => {
    setDropDown((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <Template
      header={
        <TemplateHeader
          elipses
          title={isEdtiting ? "Product details" : "Create a product"}
        />
      }
    >
      <div className="overflow-y-auto h-[651px] mt-1">
        <div className="flex justify-between items-center px-5 pb-2">
          <div className="py-[2px] px-[4px] border border-gray-100 rounded-full flex items-center justify-between w-[65px] text-xs text-grey">
            <p>Draft</p>
            <BsCheck2 />
          </div>
          <p
            className="text-primary text-xs font-medium cursor-pointer"
            onClick={() => router.push("product-preview")}
          >
            Preview product
          </p>
        </div>
        <Divider />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="px-5 mt-5">
            <Collapsible
              title="Basic details"
              isCollapsed={dropdown.basic_details}
              toggleSection={() => toggleDropdown("basic_details")}
            >
              <div className="mt-3">
                <Input
                  name="product_title"
                  type="text"
                  value={formik.values.product_title}
                  label="Product Title"
                  onChange={formik.handleChange}
                  error={getError("product_title")}
                />
                <TextArea
                  name="product_desc"
                  placeholder="Product description"
                  value={formik.values.product_desc}
                  onChange={formik.handleChange}
                  error={getError("product_desc")}
                />
                <div className="flex items-center gap-3 mt-[-12px]">
                  <Input
                    name="price"
                    type="text"
                    label="Price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={getError("price")}
                  />
                  <Input
                    name="old_price"
                    type="text"
                    label="Old price"
                    value={formik.values.old_price}
                    onChange={formik.handleChange}
                    error={getError("old_price")}
                  />
                </div>
                <MultiInput
                  label="Product collection"
                  name="product_collection"
                  placeholder="Search or create collection"
                />
                <Input
                  name="inventory_stock"
                  type="text"
                  label="Inventory stocks"
                  value={formik.values.inventory_stock}
                  onChange={formik.handleChange}
                  error={getError("inventory_stock")}
                />
              </div>
            </Collapsible>
          </div>
        </Formik>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <Collapsible
              title="Product images"
              isCollapsed={dropdown.image}
              toggleSection={() => toggleDropdown("image")}
            >
              <div className="flex flex-col space-y-5">
                {imagePreview &&
                  imagePreview.map((image, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            key={index}
                            src={image.img}
                            alt={`Preview ${index}`}
                            className="h-[60px] w-[60px] rounded-lg object-cover"
                          />
                          <p className="text-sm text-black">{image.name}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <IoEllipsisHorizontal size={20} />
                          <Switch onToggle={() => handleToggle(index)} />
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="bg-[#f7f7f7] rounded-full p-[10px] mt-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="cursor-pointer flex items-center justify-center gap-2"
                >
                  <p className="text-sm font-medium text-primary">Add image</p>
                  <UploadIcon />
                </label>
              </div>
            </Collapsible>
          </div>
        </div>
        <div className="mt-5">
          <Divider />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="px-5 mt-5">
              <p className="text-black text-sm font-medium text-left">
                Inventory variations
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Checkbox
                  onChange={() => setIsChecked(!isChecked)}
                  checked={isChecked}
                />
                <p className="text-sm font-normal text-left">
                  This product is variable; has different colors, sizes, weight,
                  materials, etc.
                </p>
              </div>
              {options.map((item, index) => (
                <div className="my-4">
                  <MultiInput
                    label={`Option ${item.id}`}
                    label2={item.type}
                    name="color"
                    placeholder="Enter values"
                    isIcon
                    height="h-[122px]"
                  />
                </div>
              ))}
              <div
                className="bg-[#f7f7f7] rounded-full p-[10px] mt-3"
                onClick={addNewOptions}
              >
                <div className="cursor-pointer flex items-center justify-center gap-2">
                  <FiPlus className="text-primary font-thin" size={20} />
                  <p className="text-sm font-medium text-primary">
                    Add new option
                  </p>
                </div>
              </div>
            </div>
          </Formik>
        </div>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <Collapsible
              title="Configure variant prices and stocks"
              isCollapsed={dropdown.prices}
              toggleSection={() => toggleDropdown("prices")}
            >
              <div className="flex justify-between items-center mt-7">
                <div className="flex gap-2">
                  <div className="h-[40px] w-[40px] rounded-[5.33px] bg-[#e5e5e5] flex justify-center items-center">
                    <UploadIcon color="rgba(0, 0, 0, 0.6)" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Red - L - leather</p>
                    <div className="flex items-center">
                      <p className="text-xs text-grey">₦20</p>
                      <BsDot size={20} />
                      <p className="text-xs text-grey">20X</p>
                    </div>
                  </div>
                </div>
                <IoEllipsisHorizontal />
              </div>
              <div className="flex items-center gap-3 ">
                <Input
                  name="price"
                  type="text"
                  label="Price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  error={getError("price")}
                />
                <Input
                  name="old_price"
                  type="text"
                  label="Old price"
                  value={formik.values.old_price}
                  onChange={formik.handleChange}
                  error={getError("old_price")}
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex gap-2">
                  <div className="h-[40px] w-[40px] rounded-[5.33px] bg-[#e5e5e5] flex justify-center items-center">
                    <UploadIcon color="rgba(0, 0, 0, 0.6)" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Red - L - leather</p>
                    <div className="flex items-center">
                      <p className="text-xs text-grey">₦20</p>
                      <BsDot size={20} />
                      <p className="text-xs text-grey">20X</p>
                    </div>
                  </div>
                </div>
                <IoEllipsisHorizontal />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <div className="h-[40px] w-[40px] rounded-[5.33px] bg-[#e5e5e5] flex justify-center items-center">
                    <UploadIcon color="rgba(0, 0, 0, 0.6)" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Red - L - leather</p>
                    <div className="flex items-center">
                      <p className="text-xs text-grey">₦20</p>
                      <BsDot size={20} />
                      <p className="text-xs text-grey">20X</p>
                    </div>
                  </div>
                </div>
                <IoEllipsisHorizontal />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <div className="h-[40px] w-[40px] rounded-[5.33px] bg-[#e5e5e5] flex justify-center items-center">
                    <UploadIcon color="rgba(0, 0, 0, 0.6)" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Red - L - leather</p>
                    <div className="flex items-center">
                      <p className="text-xs text-grey">₦20</p>
                      <BsDot size={20} />
                      <p className="text-xs text-grey">20X</p>
                    </div>
                  </div>
                </div>
                <IoEllipsisHorizontal />
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <div className="h-[40px] w-[40px] rounded-[5.33px] bg-[#e5e5e5] flex justify-center items-center">
                    <UploadIcon color="rgba(0, 0, 0, 0.6)" />
                  </div>
                  <div>
                    <p className="text-sm text-black">Red - L - leather</p>
                    <div className="flex items-center">
                      <p className="text-xs text-grey">₦20</p>
                      <BsDot size={20} />
                      <p className="text-xs text-grey">20X</p>
                    </div>
                  </div>
                </div>
                <IoEllipsisHorizontal />
              </div>
            </Collapsible>
          </div>
        </div>
        <div className="mt-5">
          <Divider />
          <div className="px-5 mt-5">
            <Collapsible
              title="Shipping "
              isCollapsed={dropdown.shipping}
              toggleSection={() => toggleDropdown("shipping")}
            >
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs text-black">Self shipping</p>
                <Checkbox
                  onChange={() => setIsChecked(!isChecked)}
                  checked={isChecked}
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-black mt-3">InstaShop shipping</p>
                <Checkbox
                  onChange={() => setIsChecked(!isChecked)}
                  checked={isChecked}
                />
              </div>
              <div className="mt-3">
                <Input
                  name="inventory_stock"
                  type="text"
                  label="Inventory stocks"
                  value={formik.values.inventory_stock}
                  onChange={formik.handleChange}
                  error={getError("inventory_stock")}
                />
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-end px-6 border-t-[0.5px]">
        <Button
          type="button"
          label="Cancel"
          onClick={() => router.back()}
          variant="outline"
        />
        <Button
          type="submit"
          label="Save"
          disabled={!formik.isValid || formik.isSubmitting}
        />
      </div>
    </Template>
  );
};

export default ProductEdit;
