import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Absolute } from "components/atoms";

test("renders `Absolute` component", () => {
  const { getByTestId } = render(<Absolute data-testid="absolute-component" />);
  expect(getByTestId("absolute-component")).toBeInTheDocument();
});
test("test `Absolute` component position", () => {
  const component = create(<Absolute />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("position", "absolute");
});
