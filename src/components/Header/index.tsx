import React from "react";

const Header = ({ title }: { title: string }) => {
  return <h1 className="font-medium text-2xl text-black text-left">{title}</h1>;
};

export default Header;
