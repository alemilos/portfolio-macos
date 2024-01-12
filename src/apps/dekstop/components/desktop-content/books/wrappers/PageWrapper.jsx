import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="h-full px-8 py-12 flex flex-col gap-2 overflow-scroll">
      {children}
    </div>
  );
};

export default PageWrapper;
