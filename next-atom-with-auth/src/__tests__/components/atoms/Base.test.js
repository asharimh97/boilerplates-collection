import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { find } from "styled-components/test-utils";
import Base from "components/atoms/Base";

test("renders `Base` component", () => {
  const component = render(<Base data-testid="base-component" />);
  find(component.baseElement, Base);
  expect(component.getByTestId("base-component")).toBeInTheDocument();
});
