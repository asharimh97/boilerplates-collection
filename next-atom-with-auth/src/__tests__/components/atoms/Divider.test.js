import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Divider } from "components/atoms";
import { convertNumberToPixel } from "utils/helper";
import { space } from "styles/theme.base";

test("renders `Divider` without errors", () => {
  const { getByTestId } = render(<Divider data-testid="divider-component" />);
  expect(getByTestId("divider-component")).toBeInTheDocument();
});
test("renders `Divider` with additional props", () => {
  const divider = create(<Divider my={4} />).toJSON();

  expect(divider).toMatchSnapshot();
  expect(divider).toHaveStyleRule("margin-top", convertNumberToPixel(space[4]));
  expect(divider).toHaveStyleRule(
    "margin-bottom",
    convertNumberToPixel(space[4])
  );
});
test("renders `Divider` with `vertical` prop", () => {
  const divider = create(<Divider vertical mx={3} />).toJSON();

  expect(divider).toMatchSnapshot();
  expect(divider).toHaveStyleRule("width", "1px");
  expect(divider).toHaveStyleRule("display", "inline-block");
  expect(divider).toHaveStyleRule(
    "margin-right",
    convertNumberToPixel(space[3])
  );
  expect(divider).toHaveStyleRule(
    "margin-left",
    convertNumberToPixel(space[3])
  );
});
