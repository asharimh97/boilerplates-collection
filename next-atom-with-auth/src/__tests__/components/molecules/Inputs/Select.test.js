import { Select } from "components/molecules/Inputs";
import { render } from "utils/testUtils";

test("renders `Select` without error", () => {
  const { getByTestId, getByRole } = render(
    <Select data-testid="select-component" />
  );

  expect(getByTestId("select-component")).toBeInTheDocument();
  expect(getByRole("combobox")).toBeInTheDocument();
});
