import Input, { InputProps } from "./Input";

interface PhoneProps extends InputProps {
  [key: string]: any;
}

/**
 * The Phone component is a wrapper around the Input component with a
 * default `type="tel"` attribute. And it's better to be used with `useInput`
 * hook.
 */
function Phone({ value, onChange, ...props }: PhoneProps) {
  const MAX_LENGTH = 15;

  const handleChange = (e: any) => {
    const val = e.target.value;
    const cleanedVal = val.replace(/[^0-9]/g, "");
    const obj = {
      target: {
        value: cleanedVal,
      },
    };

    // @ts-ignore
    onChange(obj);
  };

  return (
    <Input
      type="tel"
      maxLength={MAX_LENGTH}
      addonBefore="+62"
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Phone;
