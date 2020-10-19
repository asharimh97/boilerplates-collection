import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Grid } from "components/atoms";

test("renders `Grid` component", () => {
  const { getByTestId } = render(<Grid data-testid="grid-component" />);
  expect(getByTestId("grid-component")).toBeInTheDocument();
});
test("test `Grid` component position", () => {
  const component = create(<Grid />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("display", "grid");
});
