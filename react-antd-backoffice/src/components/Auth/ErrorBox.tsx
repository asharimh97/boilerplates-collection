import { Box, Flex, Text, Icon } from "../Base";

interface ErrorBoxProps {
  error?: string;
}

function ErrorBox({ error }: ErrorBoxProps) {
  return (
    <Box br="$rounded-md" backgroundColor="$red50" p="14px" mb="16px">
      <Flex
        align="center"
        css={{
          mb: "8px",
          "&:last-child": {
            mb: "0",
          },
        }}
      >
        <Icon alt="error" src="x-circle" color="$red500" mr="12px" />
        <Text color="$red800" size="$sm" weight="$medium">
          {error}
        </Text>
      </Flex>
    </Box>
  );
}

export default ErrorBox;
