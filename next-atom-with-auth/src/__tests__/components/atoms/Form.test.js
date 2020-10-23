import { Form } from "components/atoms";
import { render } from "utils/testUtils";

test("renders `Form` without error", () => {
  const { getByTestId } = render(<Form data-testid="form-component" />);

  expect(getByTestId("form-component")).toBeInTheDocument();
});
