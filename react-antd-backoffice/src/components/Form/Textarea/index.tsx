import BaseTextarea from "./Base";
import RTF from "./RTF";
import { TextareaProps } from "./types";

function Textarea({ type, ...props }: TextareaProps) {
  if (type === "rtf") {
    return <RTF {...props} />;
  }

  return <BaseTextarea {...props} />;
}

export default Textarea;
