import React from "react";
import { useState } from "react";

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggleValue = () => {
    setShow(!show);
  };

  return { show, toggleValue };
};

export default useToggle;
