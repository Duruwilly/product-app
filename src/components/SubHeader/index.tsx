import React from "react";

const SubHeader = ({title}: {title: string}) => {
  return <p className="text-grey text-sm text-left my-3">{title}</p>;
};

export default SubHeader;
