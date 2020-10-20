import { Button } from "components/atoms";
import theme from "styles/theme";
import { create, fireEvent, render } from "utils/testUtils";

test("renders `Button` withtout error", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick} />);

  fireEvent.click(getByRole("button"));

  expect(getByRole("button")).toBeInTheDocument();
  expect(handleClick).toBeCalled();
});

const setup = props => create(<Button {...props} />).toJSON();

describe("test render styled `Button`", () => {
  const props = {
    theme
  };
  test("renders `Button` with color", () => {
    const button = setup({ ...props, color: "red" });
    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule(
      "background-color",
      theme.colors.red.primary
    );
    expect(button).toHaveStyleRule("border-color", theme.colors.red.primary);
    expect(button).toHaveStyleRule("color", "white");
  });
  test("renders `Button` with hex color", () => {
    const button = setup({ ...props, color: "#f0f0f0" });
    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule("background-color", "#f0f0f0");
    expect(button).toHaveStyleRule("border-color", "#f0f0f0");
    expect(button).toHaveStyleRule("color", "white");
  });

  test("renders `Button` with `type='link'`", () => {
    const button = setup({ ...props, type: "link", color: "red" });
    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule("color", theme.colors.red.primary);
  });
  test("renders `Button` with `type='link'` and hex color", () => {
    const button = setup({ ...props, type: "link", color: "#f0f0f0" });
    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule("color", "#f0f0f0");
  });
});
