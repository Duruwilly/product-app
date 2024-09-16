import React from "react";

interface TemplateProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

const Template = ({ children, header }: TemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[360px] md:max-w-[768px] lg:max-w-[1024px] h[800px] md:h[900px] lg:h[1000px] bg-white rounded-lg shadow-md text-center overflow-y-scroll mx-auto py-10">
        {header && header}
        {children}
      </div>
    </div>
  );
};

export default Template;
