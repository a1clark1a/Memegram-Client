import React from "react";
import ToolTip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./InfoToolTip.css";

const toolTipTheme = createMuiTheme({
  fontSize: "1.2rem",
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.2rem",
        fontFamily: "Titillium Web",
      },
    },
  },
});

const InfoToolTip = ({ text }) => {
  return (
    <div className="tooltip">
      <ThemeProvider theme={toolTipTheme}>
        <ToolTip title={text}>
          <InfoIcon aria-label="info" />
        </ToolTip>
      </ThemeProvider>
    </div>
  );
};

export default InfoToolTip;
