import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { create } from "react-test-renderer";
import "jest-styled-components";

import { Card } from "components/atoms";
import { shadows, space } from "styles/theme.base";
import { convertNumberToPixel } from "utils/helper";

test("renders `Card` component", () => {
  const { getByTestId } = render(<Card data-testid="card-component" />);
  expect(getByTestId("card-component")).toBeInTheDocument();
});
test("test `Card` component default styles", () => {
  const component = create(<Card />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("background", "white");
  expect(component).toHaveStyleRule("padding", convertNumberToPixel(space[3]));
  expect(component).toHaveStyleRule("border-radius", "5px");
});
test("test `Card` component custom styles", () => {
  const component = create(
    <Card boxShadow="none" border="solid 1px" borderColor="#f0f0f0" />
  ).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("background", "white");
  expect(component).toHaveStyleRule("padding", convertNumberToPixel(space[3]));
  expect(component).toHaveStyleRule("border-radius", "5px");
  expect(component).toHaveStyleRule("box-shadow", "none");
  expect(component).toHaveStyleRule("border", "solid 1px");
  expect(component).toHaveStyleRule("border-color", "#f0f0f0");
});
