import Basepicker from "./Base";
import Rangepicker from "./Range";
import { DatepickerProps } from "./types";

function Datepicker({ type, ...props }: DatepickerProps) {
  if (type === "range") {
    return <Rangepicker {...props} />;
  }

  return <Basepicker {...props} />;
}

export default Datepicker;
