import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Fixed } from "components/atoms";

test("renders `Fixed` component", () => {
  const { getByTestId } = render(<Fixed data-testid="fixed-component" />);
  expect(getByTestId("fixed-component")).toBeInTheDocument();
});
test("test `Fixed` component position", () => {
  const component = create(<Fixed />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("position", "fixed");
});
