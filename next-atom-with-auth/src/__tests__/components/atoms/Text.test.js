import { cleanup, render } from "@testing-library/react";
import { create } from "react-test-renderer";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

import { Text } from "components/atoms";

import { fontSizes } from "styles/theme.base";
import theme from "styles/theme";

beforeEach(cleanup);

test("renders `Text` without error", () => {
  const { getByTestId } = render(<Text data-testid="text-component" />);

  expect(getByTestId("text-component")).toBeInTheDocument();
});

const setup = props => create(<Text {...props} />).toJSON();

describe("test `Text` render styled component", () => {
  const props = {
    theme
  };

  test("renders default style if no props passed", () => {
    const text = setup(props);

    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("font-size", fontSizes[1]);
    expect(text).toHaveStyleRule("line-height", "1.65");
    expect(text).toHaveStyleRule("margin-right", "0");
    expect(text).toHaveStyleRule("margin-left", "0");
    expect(text).toHaveStyleRule("margin-top", "0");
    expect(text).toHaveStyleRule("margin-bottom", "1.05em");
  });

  test("renders bold `Text`", () => {
    const text = setup({ ...props, bold: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("font-weight", "700");
  });
  test("renders semibold `Text`", () => {
    const text = setup({ ...props, semibold: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("font-weight", "600");
  });
  test("renders medium `Text`", () => {
    const text = setup({ ...props, medium: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("font-weight", "500");
  });

  test("renders capitalize `Text`", () => {
    const text = setup({ ...props, caps: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("text-transform", "capitalize");
  });
  test("renders lowercase `Text`", () => {
    const text = setup({ ...props, lowercase: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("text-transform", "lowercase");
  });
  test("renders uppercase `Text`", () => {
    const text = setup({ ...props, uppercase: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("text-transform", "uppercase");
  });

  test("renders no margin if `tight` prop passed", () => {
    const text = setup({ ...props, tight: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("margin-top", "0");
    expect(text).toHaveStyleRule("margin-bottom", "0");
  });

  test("renders truncated `Text`", () => {
    const text = setup({ ...props, truncate: true });
    expect(text).toMatchSnapshot();
    expect(text).toHaveStyleRule("overflow", "hidden");
    expect(text).toHaveStyleRule("text-overflow", "ellipsis");
    expect(text).toHaveStyleRule("white-space", "nowrap");
    expect(text).toHaveStyleRule("word-break", "break-word");
  });
});
