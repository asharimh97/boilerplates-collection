import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "components/Base";
import { Link } from "react-router-dom";

interface ButtonAddProps {
  to?: string;
  label?: string;
}

function ButtonAdd({ to = "/dashboard", label }: ButtonAddProps) {
  return (
    <Link to={to}>
      <Button type="primary" icon={<PlusIcon />}>
        {label}
      </Button>
    </Link>
  );
}

export default ButtonAdd;
