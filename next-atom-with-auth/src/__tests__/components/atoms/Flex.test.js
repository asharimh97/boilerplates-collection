import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Flex } from "components/atoms";

test("renders `Flex` component", () => {
  const { getByTestId } = render(<Flex data-testid="flex-component" />);
  expect(getByTestId("flex-component")).toBeInTheDocument();
});
test("test `Flex` component position", () => {
  const component = create(<Flex />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("display", "flex");
});
