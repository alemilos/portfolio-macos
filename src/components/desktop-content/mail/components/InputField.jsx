import React, { useState, useEffect } from "react";
import { colors } from "../../../../colors";

const InputField = ({ type = "text", setValue }) => {
  function handleChange(event) {
    setValue(event.target.value);
  }

  let cursorColor = {
    caretColor: colors.mail.cursor,
  };

  return (
    <div className="flex w-full">
      <input
        type={type}
        style={cursorColor}
        className="bg-transparent outline-none w-full"
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
