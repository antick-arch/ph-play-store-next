import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex min-h-48 items-center justify-center">
      <HashLoader />
    </div>
  );
};

export default Loading;
