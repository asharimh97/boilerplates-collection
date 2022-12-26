import { Box, Flex, Text, Icon } from "components/Base";

interface SuccessBoxProps {
  msg: string;
}

function SuccessBox({ msg = "Data telah disetujui" }: SuccessBoxProps) {
  return (
    <Box br="$rounded-md" backgroundColor="$green50" p="16px" mb="20px">
      <Flex
        align="flex-start"
        css={{
          mb: "8px",
          "&:last-child": {
            mb: "0",
          },
        }}
      >
        <Icon alt="success" src="check-circle" color="$green400" mr="12px" />
        <Flex direction="column">
          <Text color="$green800" size="$sm" weight="$medium">
            {msg}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SuccessBox;
