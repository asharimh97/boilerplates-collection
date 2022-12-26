import { Text, Box } from "../Base";

interface InfoItemProps {
  label: string;
  value?: React.ReactNode;
  children?: React.ReactNode;
  [key: string]: any;
}

function InfoItem({ label, value, children, ...props }: InfoItemProps) {
  return (
    <Box {...props}>
      <Text size="$sm" weight="$medium" color="$coolGray400" mb="8px">
        {label}
      </Text>
      {children && !value ? (
        children
      ) : (
        <Text size="$sm" color="$coolGray600">
          {value || "-"}
        </Text>
      )}
    </Box>
  );
}

export default InfoItem;
