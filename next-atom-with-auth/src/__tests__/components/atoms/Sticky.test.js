import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Sticky } from "components/atoms";

test("renders `Sticky` component", () => {
  const { getByTestId } = render(<Sticky data-testid="sticky-component" />);
  expect(getByTestId("sticky-component")).toBeInTheDocument();
});
test("test `Sticky` component position", () => {
  const component = create(<Sticky />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("position", "sticky");
});
