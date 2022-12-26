import { Box, Text } from "components/Base";

interface DetailItemProps {
  label: string;
  value?: React.ReactNode | any;
  children?: React.ReactNode;
}

function DetailItem({ label, value, children }: DetailItemProps) {
  return (
    <Box>
      <Text weight="$medium" mb="10px" color="$coolGray400">
        {label}
      </Text>
      {children ? children : <Text color="$coolGray600">{value || "-"}</Text>}
    </Box>
  );
}

export default DetailItem;
