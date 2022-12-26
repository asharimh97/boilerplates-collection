import { useState } from "react";

const useToggle = (initialToggleState = false): [boolean, () => void] => {
  const [isVisible, setVisibility] = useState<boolean>(initialToggleState);

  const toggle = () => {
    setVisibility(!isVisible);
  };

  return [isVisible, toggle];
};

export default useToggle;
