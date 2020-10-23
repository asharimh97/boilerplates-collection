import { InputText } from "components/molecules/Inputs";
import { render } from "utils/testUtils";

test("renders `InputText` without error", () => {
  const { getByTestId, getByRole } = render(
    <InputText data-testid="input-text" />
  );

  expect(getByTestId("input-text")).toBeInTheDocument();
  expect(getByRole("textbox")).toBeInTheDocument();
});
