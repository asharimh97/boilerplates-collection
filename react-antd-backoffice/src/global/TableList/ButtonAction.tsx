import { Flex, Button } from "components/Base";
import { FaEdit } from "react-icons/fa";
import { HiEye, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

interface ButtonActionProps {
  id: any;
  url?: string;
  view?: boolean;
  edit?: boolean;
  delete?: boolean;
  onDelete?: (params?: any) => void;
  [key: string]: any;
}

function ButtonAction({
  url,
  id,
  view = true,
  edit = true,
  delete: withDelete = true,
  onDelete,
  ...props
}: ButtonActionProps) {
  return (
    <Flex align="center" gap="12px" {...props}>
      {view && (
        <Link to={`${url}/detail/${id}`}>
          <Button icon={<HiEye size={16} />} />
        </Link>
      )}
      {edit && (
        <Link to={`${url}/edit/${id}`}>
          <Button icon={<FaEdit size={16} />} />
        </Link>
      )}
      {withDelete && <Button onClick={onDelete} icon={<HiTrash size={16} />} />}
    </Flex>
  );
}

export default ButtonAction;
