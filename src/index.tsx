import { Retool } from "@tryretool/custom-component-support";
import React from "react";

export const CustomComponent: React.FC = () => {
  Retool.useComponentSettings({
    defaultWidth: 4,
    defaultHeight: 10
  });

  return <></>;
};
