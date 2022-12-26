import { useState } from "react";

function useInput<T = string>(
  initialValue: T,
): [T, (e: any) => void, (e?: any) => void] {
  const [value, setValue] = useState<T>(initialValue);

  function onChange(e: any) {
    // @ts-ignore
    setValue(e.target.value);
  }

  function reset(val = "") {
    // @ts-ignore
    setValue(val);
  }

  return [value, onChange, reset];
}

export default useInput;
