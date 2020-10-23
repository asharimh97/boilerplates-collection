import { InputImage } from "components/molecules/Inputs";
import { render } from "utils/testUtils";

test("renders `InputImage` without error", () => {
  const { getByTestId } = render(<InputImage data-testid="input-image" />);

  expect(getByTestId("input-image")).toBeInTheDocument();
});
