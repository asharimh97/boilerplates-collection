import { Box, Flex, Text, Icon } from "components/Base";

interface ErrorBoxProps {
  reason?: string;
}

function ErrorBox({ reason }: ErrorBoxProps) {
  return (
    <Box br="$rounded-md" backgroundColor="$red50" p="16px" mb="20px">
      <Flex
        align="flex-start"
        css={{
          mb: "8px",
          "&:last-child": {
            mb: "0",
          },
        }}
      >
        <Icon alt="error" src="x-circle" color="$red500" mr="12px" />
        <Flex direction="column">
          <Text color="$red800" size="$sm" weight="$medium" mb="8px">
            Alasan Penolakan
          </Text>
          <Text color="$red700" size="$sm">
            {reason || "Tidak ada keterangan"}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ErrorBox;
