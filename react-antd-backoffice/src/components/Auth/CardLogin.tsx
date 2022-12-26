import { Card, Flex, Image, Text } from "../Base";

interface CardLoginProps {
  children?: React.ReactNode;
  title: string;
  [key: string]: any;
}

function CardLogin({ children, title = "Masuk" }: CardLoginProps) {
  return (
    <Card w="356px" m="auto" p="16px" br="$rounded-lg" boxShadow="$shadow-md">
      <Flex direction="column">
        <Image
          src="/images/reach-logo.png"
          height="40px"
          alt="Reach logo"
          mb="16px"
        />
        <Text size="$2xl" color="$coolGray600" weight="$bold" mb="16px">
          {title}
        </Text>
      </Flex>
      {children}
    </Card>
  );
}

export default CardLogin;
