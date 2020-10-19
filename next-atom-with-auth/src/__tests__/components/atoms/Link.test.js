import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from "components/atoms";

describe("renders `Link`", () => {
  beforeEach(cleanup);

  test("renders external link if given `href` prop", () => {
    const { getByTestId, findByTestId } = render(
      <Link href="https://google.com" />
    );

    expect(getByTestId("external-link")).toBeTruthy();

    expect(getByTestId("external-link")).toHaveAttribute(
      "href",
      "https://google.com"
    );
  });

  test("renders internal link if given `route` prop", () => {
    const { getByTestId } = render(
      <Link route="dashboard" params={{ outletId: 123 }} />
    );

    expect(getByTestId("internal-link")).toBeInTheDocument();
  });
});
