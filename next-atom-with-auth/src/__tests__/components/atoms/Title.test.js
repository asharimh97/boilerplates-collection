import { create, render } from "utils/testUtils";

import { Title } from "components/atoms";
import { fontSizes } from "styles/theme.base";

test("renders `Title` without error", () => {
  const { getByTestId, getByRole } = render(
    <Title data-testid="title-component" />
  );

  expect(getByTestId("title-component")).toBeInTheDocument();
  expect(getByRole("heading", { level: 1 })).toBeInTheDocument();
});

describe("test `Title` styled render", () => {
  test("renders `h1` component", () => {
    const title = create(<Title as="h1" />).toJSON();

    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule("font-size", fontSizes[6]);
  });
  test("renders `h2` component", () => {
    const title = create(<Title as="h2" />).toJSON();

    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule("font-size", fontSizes[5]);
  });
  test("renders `h3` component", () => {
    const title = create(<Title as="h3" />).toJSON();

    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule("font-size", fontSizes[4]);
  });
  test("renders `h4` component", () => {
    const title = create(<Title as="h4" />).toJSON();

    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule("font-size", fontSizes[3]);
  });
  test("renders `h5` component", () => {
    const title = create(<Title as="h5" />).toJSON();

    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule("font-size", fontSizes[2]);
  });
});
