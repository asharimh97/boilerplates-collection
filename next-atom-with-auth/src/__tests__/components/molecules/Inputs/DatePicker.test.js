import { DatePicker } from "components/molecules/Inputs";
import { render } from "utils/testUtils";

test("renders `DatePicker` without error", () => {
  const { getByTestId, getByRole } = render(
    <DatePicker data-testid="date-picker" />
  );

  expect(getByTestId("date-picker")).toBeInTheDocument();
  expect(getByRole("textbox")).toBeInTheDocument();
});
