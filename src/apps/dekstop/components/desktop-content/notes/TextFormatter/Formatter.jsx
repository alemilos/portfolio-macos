import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Formatter = ({ note }) => {
  return (
    <div className="text-sm ">
      <ReactMarkdown children={note} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Formatter;
