import { Flex, Button, Text } from "components/Base";
import { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

interface PageTitleProps {
  title: string;
  backUrl?: string;
  children?: ReactNode;
}

function PageTitle({ title, backUrl, children }: PageTitleProps) {
  return (
    <Flex align="center" justify="space-between" mb="24px">
      <Flex align="center">
        {backUrl && (
          <Link to={backUrl}>
            <Button
              type="primary"
              icon={<FiArrowLeft />}
              size="large"
              css={{ mr: 16 }}
            />
          </Link>
        )}
        <Text as="h1" size="$xl" weight="$bold" color="$coolGray500">
          {title}
        </Text>
      </Flex>
      {children}
    </Flex>
  );
}

export default PageTitle;
