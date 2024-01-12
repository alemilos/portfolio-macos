import React from "react";

// Consts
import { STATUSES } from "../../../data/projects";

// Colors
import { colors } from "../../../../../../../../colors";

// Text
import text from "../../../../../../../../text/safari.json";

// Hooks
import { useLanguage } from "../../../../../../../../providers/LanguageProvider";

const Status = ({ status }) => {
  const { language } = useLanguage();

  let statusBg;
  if (status === STATUSES.IN_PROGRESS)
    statusBg = colors.safari.project.status.inProgress;
  else if (status === STATUSES.COMPLETED)
    statusBg = colors.safari.project.status.completed;
  else if (status === STATUSES.IDEA)
    statusBg = colors.safari.project.status.idea;

  let statusStyle = {
    backgroundColor: statusBg,
  };

  return (
    <div className="w-full">
      <div
        style={statusStyle}
        className="px-2 py-1 w-max text-white font-bold text-xs rounded-lg "
      >
        {text.project.status[status][language].toUpperCase()}
      </div>
    </div>
  );
};

export default Status;
