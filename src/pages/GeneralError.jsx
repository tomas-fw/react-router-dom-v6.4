import React from "react";
import { useRouteError } from "react-router-dom";

const GeneralError = () => {
  const error = useRouteError();
  console.log("error gneral", error);
  return <div>This is a general error page</div>;
};

export default GeneralError;
