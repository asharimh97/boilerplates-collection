import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Box } from "components/atoms";

test("renders `Box` component", () => {
  const { getByTestId } = render(<Box data-testid="box-component" />);

  expect(getByTestId("box-component")).toBeInTheDocument();
});
