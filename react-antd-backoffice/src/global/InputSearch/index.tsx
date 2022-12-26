import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box } from "components/Base";
import { Input } from "components/Form";
import { InputProps } from "components/Form/Input";
import { theme } from "configs/stitches.config";

interface SearchProps extends InputProps {
  [key: string]: any;
}

function InputSearch({
  w = "450px",
  placeholder = "Cari",
  ...props
}: SearchProps) {
  return (
    <Box w={w}>
      <Input
        placeholder={placeholder}
        role="search"
        prefix={
          <MagnifyingGlassIcon
            style={{ color: theme.colors["coolGray400"].value }}
          />
        }
        {...props}
      />
    </Box>
  );
}

export default InputSearch;
