import React from "react";
import { colors } from "../../../../colors";

// Components
import ControlButtons from "../../reusable/ControlButtons";
import DirectedButtons from "../components/DirectedButtons";
import SearchBar from "../components/SearchBar";

const SafariPanelHeader = () => {
  let headerBg = {
    backgroundColor: colors.safari.header,
  };

  return (
    <div
      style={headerBg}
      className="flex items-center box-border rounded-t-xl w-full border-b border-black h-[58px] bg-[red] pl-[22px] gap-8"
    >
      <ControlButtons />
      <div className="flex items-center gap-8 pl-16">
        <DirectedButtons />
        <SearchBar />
      </div>
    </div>
  );
};

export default SafariPanelHeader;
